"""data which comes from FE"""
from pydantic import BaseModel # brings the class

"""
This class inherits from BaseModel type validation, 
data conversion, and clear error generation if something is missing.
"""
class Login(BaseModel):
    email: str
    password: str
