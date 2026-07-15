from sqlalchemy import select
from models import Runner
from app.db.database import SessionLocal
from schemas import Login

def get_user_login(login:Login): # param user will be an instance of Login
    db = SessionLocal()
    runner = conn.quert(f"select  * from usuarios where email ={login.email}")

    if runner is None:
        return{"message": "User not found"}
    
    elif runner.password != login.password:
        return {"message": "Incorrect password"} 

    else:
        return{
            "message": "The login succesful"
        }.
    .
