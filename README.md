# Maratune

## Overview

Maratune is a web application designed to simplify the management and discovery of running events and marathons. The platform aims to reduce the lack of reliable information available to runners by providing a centralized place where they can safely find sporting events and organizers can efficiently manage them.

The application allows users to browse events, view detailed information, and enables organizers to create and manage their own events.

>*Note:* The event registration feature was planned but was not completed during the development of the project.

---

## Objectives

- Provide a centralized platform for running events.
- Simplify event management for organizers.
- Allow runners to easily find available events.
- Reduce misinformation about marathons and running competitions.

---

## User Roles

### Runner

- Register an account.
- Log in.
- View all available events.
- Search for events.
- View only events with **Open** status.
- View detailed event information.

### Organizer

- Register an account.
- Log in.
- Create events.
- Edit their own events.
- Delete their own events.
- View all events.

### Sponsor

The database structure includes sponsors, but their functionality was not implemented during the development of the project.

---

## Technologies

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Vite

### Backend

- Python 3
- FastAPI

### Database

- PostgreSQL
- Supabase

### Deployment

- Render (Backend)

---

## Features

### Authentication

- User registration
- User login

### Runner

- Browse events
- Search events
- View open events
- View detailed event information

### Organizer

- Create events
- Edit own events
- Delete own events
- View all events

---

## API

### Base URL

https://maratune.onrender.com

### Swagger Documentation

https://maratune.onrender.com/docs

### Endpoints

| Method | Endpoint | Description |
|----------|---------------------------|----------------------|
| POST | `/register` | Register a new user |
| POST | `/login` | User authentication |
| GET | `/events` | Get all events |
| POST | `/events` | Create a new event |
| PATCH | `/events/{id_event}` | Update an event |
| DELETE | `/events/{id_event}` | Delete an event |

---

## Database

The project uses PostgreSQL hosted on Supabase.

### Tables

- runners
- organizers
- sponsors
- events
- inscriptions

---

## Installation

### Clone the repository

```bash
git clone https://github.com/joncoder14/maratune.git
```

Enter the project directory.

```bash
cd maratune
```

Install frontend dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

### Backend Setup

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
.venv\Scripts\activate.ps1
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install the project dependencies.

```bash
pip install -r app/requirements.txt
```

Run the API locally.

```bash
python -m fastapi dev app/main.py
```

> The backend is currently deployed on Render, so running it locally is optional.

---


## Project Structure

```text
maratune/
│   .env
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   
├───app
│   │   database.py
│   │   main.py
│   │   requirements.txt
│   │   
│   ├───routers
│   │   │   authentication_router.py
│   │   │   event_router.py
│   │           
│   ├───schemas
│   │   │   event_schema.py
│   │   │   user_schema.py
│   │           
│   ├───services
│   │   │   authentication_service.py
│   │   │   event_service.py
│           
└───src
    │   main.js
    │   
    ├───assets
    │   ├───icons
    │   │       google.png
    │   │       
    │   ├───images
    │   │       img-login.png
    │   │       runner.png
    │   │       
    │   └───logo
    │           logo-horizontal.png
    │           logo.png
    │           only-logo.png
    │           
    ├───js
    │   ├───routes
    │   │       router.js
    │   │       
    │   ├───services
    │   │       eventService.js
    │   │       logoutservice.js
    │   │       searchservice.js
    │   │       userService.js
    │   │       
    │   └───views
    │           login.js
    │           myEvents.js
    │           organizer.js
    │           register.js
    │           runner.js
    │           sponsor.js
    │           
    └───styles
            dashboard-events.css
            global.css
            input.css
            login.css
            register.css
```

---

## Development Team

| Member | Role |
|----------|----------------|
| Jonathan Rodríguez | Scrum Master |
| Omar Vizcaíno | Frontend Developer |
| José Bisbal | Frontend Developer |
| Andrés Barrios | Backend Developer |
| Joseph Bolívar | Backend Developer |
| Keiner Ramírez | Database Administrator |

---

# Future Improvements

- Complete the event registration system.
- Implement sponsor functionality.
- Add notifications for runners.
- Improve event filtering.
- Add registration history.
- Implement an administrator dashboard.

---

# Academic Purpose

This project was developed for academic purposes as part of a software development training program.

---

# License

This project is intended for academic use only.