from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Integer, Date
from datetime import date
"""
Define the tables as in db and the models
"""
class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "runners"

    id_runner: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String)
    lastname:Mapped[str] = mapped_column(String)
    email : Mapped[str]= mapped_column(String)
    phone_number: Mapped[str] = mapped_column(String)
    password: Mapped[str] = mapped_column(String)
    city: Mapped[str] = mapped_column(String)
    date_register: Mapped[date] = mapped_column(Date)



