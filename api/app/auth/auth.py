import requests
from dataclasses import dataclass, asdict
from typing import List, Optional, Any
from enum import Enum, auto
import json



from requests import request

@dataclass
class Client:
    url: str
    headers: dict

    def run_query(self, query: str, variables: dict, extract=False):
        request = requests.post(
            self.url,
            headers=self.headers,
            json={"query": query, "variables": variables},
        )
        assert request.ok, f"Failed with code {request.status_code}"
        return request.json()
    find_user_by_email = lambda self, email: self.run_query(
        """
            query UserByEmail($email: String!) {
                accounts(where: {email: {_eq: $email}}, limit: 1) {
                    id
                    email
                    password
                }
            }
        """,
        {"email": email},
    )
    create_user = lambda self,first_name,last_name, email, password,avatar: self.run_query(
        """
        mutation MyMutation($avatar: String!, $email: String!, $first_name: String!, $last_name: String!, $password: String!) {
    insert_accounts_one(object: { avatar: $avatar, email: $email, first_name: $first_name, last_name: $last_name, password: $password }) {
      id
      first_name
      last_name
      email
      avatar
      is_verified
    }
  }
        """,
        {"first_name":first_name,"last_name":last_name,"email": email, "password": password,"avatar":avatar},
    )
    update_password = lambda self, id, password: self.run_query(
        """
            mutation UpdatePassword($id: Int!, $password: String!) {
                update_user_by_pk(pk_columns: {id: $id}, _set: {password: $password}) {
                    password
                }
            }
        """,
        {"id": id, "password": password},
    )

@dataclass
class RequestMixin:
    @classmethod
    def from_request(cls, request):
        values = request.get("input")
        return cls(**values)

    def to_json(self):
        return json.dumps(asdict(self))


@dataclass
class JsonWebToken(RequestMixin):
    token: str

@dataclass
class AuthArgs(RequestMixin):
    email: str
    password: str

@dataclass
class CreateUserOutput(RequestMixin):
    avatar: str
    email: str
    password: str
    first_name: str
    last_name: str


@dataclass
class SignupOutput(RequestMixin):
    id: Any
    first_name: str
    last_name: str
    email: str
    avatar: Optional[str]
    is_verified: bool
    


@dataclass
class Mutation(RequestMixin):
    Signup: Optional[SignupOutput]


@dataclass
class SignupArgs(RequestMixin):
    first_name: str
    last_name: str
    password: str
    email: str
    avatar: str