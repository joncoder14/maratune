from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth import router



app = FastAPI()

app.include_router(router) # registers a apirouter in the app







origins = [
    "http://localhost:5173",
]

app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credential=True,
                   allow_methods=["*"],
                   allow_headers=["*"],)



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





    

# URL = "https://maratune.onrender.com"