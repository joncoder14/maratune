from fastapi import APIRouter
from schemas.event_schema import Event
from services.event_service import create_event, get_all_events

router = APIRouter(tags=["Events"])


@router.post("/events")
def add_event(event: Event):
    return create_event(event)

@router.get("/events")
def get_events():
    return get_all_events()