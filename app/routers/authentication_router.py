"""receives http requests"""
from fastapi import APIRouter
from schemas.user_schema import Login, User
from services.authentication_service import login_user, register_user

router = APIRouter()


@router.post("/login")
def login(login: Login):
    return login_user(login)

@router.post("/register")
def create_user(user: User):
    return register_user(user)
