"""Logic"""
from database import get_connection
from datetime import datetime


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

def register_user(user):
    connection = get_connection()
    cursor = connection.cursor()

    if user.role == "runner":
        query = """
            INSERT INTO runners
            (name, lastname, email, phone_number, password, nit, city, date_register)
            VALUES
            (%s,%s,%s,%s,%s,%s,%s,%s)

            RETURNING id_runner;
            """
        cursor.execute(
            query,(
                user.name,
                user.lastname,
                user.email,
                user.phone_number,
                user.password,
                user.nit,
                user.city,
                datetime.now()
            )
        )

        new_runner = cursor.fetchone()
        connection.commit()

        cursor.close()
        connection.close()

        return {
            "success": True,
            "message": "Runner Created",
            "id_runner": new_runner["id_runner"]
        }
    
    elif user.role == "sponsor":
        query = """
            INSERT INTO sponsors
            (name,email,phone_number,password,city,nit)
            VALUES
            (%s,%s,%s,%s,%s,%s)

            RETURNING id_sponsor;
            """
        cursor.execute(
            query, (
                user.name,
                user.email,
                user.phone_number,
                user.password,
                user.city,
                user.nit
            )
        )

        sponsor = cursor.fetchone()
        connection.commit()

        cursor.close()
        connection.close()

        return{
            "success": True,
            "message": "Sponsor created",
            "id_sponsor": sponsor["id_sponsor"]
        }

    elif user.role == "organizer":
        query = """
        INSERT INTO event_organizer
        (
            name,
            email,
            password,
            city,
            phone_number,
            nit
        )

        VALUES
        (%s,%s,%s,%s,%s,%s)

        RETURNING id_event_organizer;
        """

        cursor.execute(
            query,
            (
                user.name,
                user.email,
                user.password,
                user.city,
                user.phone_number,
                user.nit
            )
        )

        organizer = cursor.fetchone()

        connection.commit()

        cursor.close()
        connection.close()

        return {
            "success": True,
            "message": "Organizer created",
            "id_event_organizer": organizer["id_event_organizer"]
        }
