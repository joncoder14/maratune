"""
Data which comes from FE
"""
from pydantic import BaseModel

class Login(BaseModel): # Expected data to get to sign in
    email: str
    password: str