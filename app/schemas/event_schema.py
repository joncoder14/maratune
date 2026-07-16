
from pydantic import BaseModel
from datetime import date, time
from typing import Optional


class Event(BaseModel):
    name: str
    description: str
    date_event: date
    date_time: time
    city: str
    cups: int
    status: str
    id_event_organizer: int

class UpdateEvents(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    date_event: Optional[date] = None
    date_time: Optional[time] = None
    city: Optional[str] = None
    cups: Optional[int] = None
    status: Optional[str] = None
