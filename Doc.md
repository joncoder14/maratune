# database.py
Cuando en otro lugar escribamos:

~~~Python
connection = get_connection()
~~~
obtendremos una conexión lista para consultar la base de datos.

os.getenv() -> obtiene los datos 

# schemas/auth_schema.py
Cuando el frontend envíe:
~~~json
{
    "email": "user@gmail.com",
    "password": "12345678"
}
~~~
FastAPI convertirá automáticamente ese JSON en un objeto:
~~~python
login.email
login.password
~~~