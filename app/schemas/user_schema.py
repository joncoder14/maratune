"""data which comes from FE"""
from pydantic import BaseModel # brings the class
from typing import Optional

"""
This class inherits from BaseModel type validation, 
data conversion, and clear error generation if something is missing.
"""
class Login(BaseModel):
    email: str
    password: str

class User(BaseModel):
    role: str
    name: str
    lastname: Optional[str] = None
    email: str
    phone_number: int
    password: str
    nit: int
    city: str