from database import get_connection

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
        "id_event": new_event["id_event"]
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