
from pydantic import BaseModel
from datetime import date, time


class Event(BaseModel):
    name: str
    description: str
    date_event: date
    date_time: time
    city: str
    
    cups: int
    status: str
    id_event_organizer: int