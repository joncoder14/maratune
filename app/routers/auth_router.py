"""receives http requests"""
from fastapi import APIRouter
from app.schemas.auth_schema import Login
from app.services.auth_service import login_user

router = APIRouter()


@router.post("/login")
def login(login: Login):
    return login_user(login)