from fastapi import FastAPI
from sqlalchemy import select

from db.database import SessionLocal
from models import User
from schemas import Login


app = FastAPI()
"""
# Registro
class UserRegister(BaseModel): # defines a data mold for user registration
    fullname : str
    email : str
    password : str
    confirmpassword : str

@app.post("/register")
def register(user:UserRegister): # means user comes from request body and must fullfill the UserRegister model
    return {
        "fullname": user.fullname,
        "email": user.email,
        "password": user.password,
        "confirmpassword": user.confirmpassword
    }
"""


@app.post("/login")
def get_user_login(login:Login): # param user will be an instance of Login
    db = SessionLocal()
    user = db.scalar(select(User).where(User.email == login.email))

    if user is None:
        return{"message": "User not found"}
    
    elif user.password != login.password:
        return {"message": "Incorrect password"} 

    else:
        return{
            "message": "The login succesful"
        }
