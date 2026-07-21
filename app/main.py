"""INITILIZE FASTAPI AND REGISTER ROUTES"""
from fastapi import FastAPI
from routers.authentication_router import router as auth_router
from routers.event_router import router as event_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(event_router)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)