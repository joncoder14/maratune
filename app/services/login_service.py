"""Logic"""
from database import get_connection


def login_user(login):

    connection = get_connection() # connects with Supabase
    cursor = connection.cursor() # executes sql queries

    #looks 1st for RUNNERS
    cursor.execute("""
                    SELECT *
                    FROM runners
                    WHERE email = %s
                    """, (login.email,)) # it passes as a tuple

    user = cursor.fetchone() # will return the tuple of the found record
    role = "runner"

    if user:
        user_id = user["id_runner"]


    # if no exists, look for sponsor
    if user is None:
        cursor.execute("""
                        SELECT *
                        FROM sponsors
                        WHERE email=%s
                    """, (login.email,))

        user = cursor.fetchone()
        role = "sponsor"

        if user:
            user_id = user["id_sponsor"]


    # if no exits in sponsor either, look for event_organizer
    if user is None:
        cursor.execute("""
                        SELECT *
                        FROM event_organizer
                        WHERE email=%s
                    """, (login.email,))

        user = cursor.fetchone()
        role = "organizer"

        if user:
            user_id = user["id_event_organizer"]



    cursor.close()
    connection.close()

    if user is None:

        return {
            "success": False,
            "message": "User not found"
        }
    
    elif user["password"] != login.password:

        return {
            "success": False,
            "message": "Incorrect password"
        }
    
    else:
        return {
            "success": True,
            "message": "Login successful",
            "role": role,
            "user": {
                    "email": user["email"],
                    "name": user["name"],
                    "id": user_id
                    }
        }
    


   