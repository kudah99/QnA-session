import os
import jwt
from argon2.exceptions import VerifyMismatchError
from fastapi import APIRouter, Body
from app.auth.auth import AuthArgs,JsonWebToken,Client
from loguru import logger
from app.core.config import HASURA_HEADERS,HASURA_URL,HASURA_JWT_SECRET
import json
from argon2 import PasswordHasher


router = APIRouter()

client = Client(url=HASURA_URL, headers=HASURA_HEADERS)

Password = PasswordHasher()

def generate_token(user) -> str:
    payload = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["editor", "user", "mod"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": user["id"],
        }
    }
    token = jwt.encode(payload, HASURA_JWT_SECRET, "HS256")
    return token.decode("utf-8")

def rehash_and_save_password_if_needed(user, plaintext_password):
    if Password.check_needs_rehash(user["password"]):
        client.update_password(user["id"], Password.hash(plaintext_password))

@router.post("", response_model=AuthArgs, name="accounts:login-user")
def login_handler(data: AuthArgs = Body(...)):
    user_response = client.find_user_by_email(data.email)
    logger.success(user_response)
    user = user_response["data"]["accounts"][0]
    try:
        Password.verify(user.get("password"), data.password)
        rehash_and_save_password_if_needed(user,data)
        return JsonWebToken(generate_token(user)).to_json()
    except VerifyMismatchError:
        return {"message": "Invalid credentials"}, 401