"""receives http requests"""
from fastapi import APIRouter
from schemas.user_schema import Login
from app.services.login_service import login_user

router = APIRouter()


@router.post("/login")
def login(login: Login):
    return login_user(login)