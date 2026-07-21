"""Connects with postgrsql"""
import os # python operating system: allows reading computer's environment variables
import psycopg # official connector for interacting with PostgreSQL
from dotenv import load_dotenv # It includes a specific function for reading hidden configuration files (.env)
from psycopg.rows import dict_row

load_dotenv() # Finds the .env file and read the variables stored within it.


def get_connection():
    return psycopg.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),

        row_factory=dict_row
    )

     