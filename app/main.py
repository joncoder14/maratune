"""INITILIZE FASTAPI AND REGISTER ROUTES"""
from fastapi import FastAPI
from routers.auth_router import router as auth_router

app = FastAPI()

app.include_router(auth_router)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)