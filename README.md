# MARATUNE 

## Description:
Maratune is a web application where runners canfind information about marathon events, search for races,
and register for events in a safe and easy way. It also allows marathon organizers to manage their events more easily and efficiently.

## technologies
fronted
- HTML
- CSS
- JavaScript
- vite
- font awesome
  

Backend
- Python3
- FastAPI

Base de datos
- PostgreSQL 

Control de versiones
- Git y GitHub

## deployment
fronted:
- Local run with Vite (npm run dev)
backend:
- Render
Base de datos:
- Supabase
## Arquitecture

Frontend (Vite SPA)
        ↓
    Fetch (HTTPS)
        ↓
Backend (FastAPI - Render)
        ↓
Supabase (PostgreSQL)

---

## instalation:
1. Clone repo
   git clone https://github.com/joncoder14/maratune.git
## Install dependencies 
fronted:
- cd src 
- npm install
- npm run dev
- the app will be able in:
- http://localhost:5173
backend:
-cd app

pip install -r requirements.txt

uvicorn main:app --reload

---

## Variables de entorno

Backend

SUPABASE_URL=

SUPABASE_KEY=

Frontend

VITE_API_URL=https://maratune.onrender.com

---

##  API

Producción

https://maratune.onrender.com

Documentación

https://maratune.onrender.com/docs

---
## funcionalties:
- login user
- watch all events
- create events
- edit events
- delete events

## Equipo

- Jonathan Rodriguez
- Omar Vizcaino
- Andrés Barrios
- José Visbal
- joseph bolivar
- keiner ramirez 
