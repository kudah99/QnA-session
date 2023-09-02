from fastapi import APIRouter, Body
from app.auth.auth import SignupArgs,SignupOutput,Client
from loguru import logger
from app.core.config import HASURA_HEADERS,HASURA_URL
import json
from argon2 import PasswordHasher


router = APIRouter()

client = Client(url=HASURA_URL, headers=HASURA_HEADERS)

Password = PasswordHasher()

@router.post("", response_model=SignupArgs, name="accounts:create-user")
async def SignupHandler(data: SignupArgs = Body(...)):
    logger.success(data)
    pswd = data.password
    hashed_password =hashed_password = Password.hash(pswd)
    user_response = client.create_user(data.first_name,data.last_name,data.email,hashed_password,data.avatar)
    if user_response.get("errors"):
        return {"message": user_response["errors"][0]["message"]}, 400
    else:
        logger.success(user_response)
        user = user_response["data"]["insert_accounts_one"]
        logger.success
        return json.dumps(user)