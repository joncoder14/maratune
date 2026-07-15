from fastapi import APIrouter
from schemas import Login
from services.user_services import get_user_login

router = APIrouter(prefix="/auth",
                   tags=["Auth"])

@router.post("/login")
def login(login:Login):
    return get_user_login(login)