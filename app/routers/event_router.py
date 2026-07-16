from fastapi import APIRouter
from schemas.event_schema import Event, UpdateEvents
from services.event_service import create_event, get_all_events, update_event, delete_event

router = APIRouter(tags=["Events"])


@router.post("/events")
def add_event(event: Event):
    return create_event(event)

@router.get("/events")
def get_events():
    return get_all_events()

@router.patch("/events/{id_event}")
def patch_event(id_event:int, event:UpdateEvents):
    return update_event(id_event, event)

@router.delete("/events/{id_events}")
def remove_event(id_event:int):
    return delete_event(id_event)