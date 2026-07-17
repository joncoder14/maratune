from database import get_connection
from fastapi import HTTPException

def create_event(event):

    connection = get_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO events
        (
            name,
            description,
            date_event,
            date_time,
            city,
            cups,
            status,
            id_event_organizer
        )

        VALUES
        (
            %s,%s,%s,%s,%s,%s,%s,%s
        )

        RETURNING id_event;
    """

    cursor.execute(
        query,
        (
            event.name,
            event.description,
            event.date_event,
            event.date_time,
            event.city,
            event.cups,
            event.status,
            event.id_event_organizer
        )
    )

    new_event = cursor.fetchone()

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "success": True,
        "message": "Event created successfully",
        "id_event": new_event["id_event"],
        "id_event_organizar": event.id_event_organizer
    }

def get_all_events():
    connection = get_connection()
    cursor = connection.cursor()

    query = """
        SELECT *
        FROM events
        ORDER BY date_event;
    """

    cursor.execute(query)

    events = cursor.fetchall()

    cursor.close()
    connection.close()

    return events

def update_event(id_event, event):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM events WHERE id_event = %s",
        (id_event,)
    )

    current_event = cursor.fetchone()

    if current_event is None:
        cursor.close()
        connection.close()
        raise HTTPException(status_code=404, detail="Event not found")

    query = """
        UPDATE events
        SET
            name = %s,
            description = %s,
            date_event = %s,
            date_time = %s,
            city = %s,
            cups = %s,
            status = %s
        WHERE id_event = %s
    """

    cursor.execute(
        query,
        (
            event.name if event.name is not None else current_event["name"],
            event.description if event.description is not None else current_event["description"],
            event.date_event if event.date_event is not None else current_event["date_event"],
            event.date_time if event.date_time is not None else current_event["date_time"],
            event.city if event.city is not None else current_event["city"],
            event.cups if event.cups is not None else current_event["cups"],
            event.status if event.status is not None else current_event["status"],
            #event.id_event_organizer if event.id_event_organizer is not None else current_event["id_event_organizer"],
            id_event
        )
    )

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "success": True,
        "message": "Event updated successfully"
    }

def delete_event(id_event):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM events WHERE id_event = %s",
        (id_event,)
    )

    event = cursor.fetchone()

    if event is None:
        cursor.close()
        connection.close()
        raise HTTPException(status_code=404, detail="Event not found")

    cursor.execute(
        "DELETE FROM events WHERE id_event = %s",
        (id_event,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "success": True,
        "message": "Event deleted successfully"
    }










