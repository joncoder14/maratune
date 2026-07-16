"""receives http requests"""
from fastapi import APIRouter
from schemas.auth_schema import Login
from services.auth_service import login_user

router = APIRouter()


@router.post("/login")
def login(login: Login):
    return login_user(login)