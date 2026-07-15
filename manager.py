from pool import DatabaseManager
import os

# 1. Instanciar e inicializar el pool (Se hace una sola vez al arrancar la app)
db = DatabaseManager()
db.initialize_pool(
    user='postgres.frvoxwqbhcijvshgximp',
    password='maratune12345.',
    host='aws-1-us-west-2.pooler.supabase.com',
    port=6543,
    database='postgres'
)



# # runner_repository.py
# class RunnerRepository:
#     def __init__(self, connection):
#         self.connection = connection

#     def get_all(self):
#         with self.connection.cursor() as cursor:
#             cursor.execute("SELECT id, name, email FROM runners;")
#             return cursor.fetchall()

#     def get_by_email(self, email):
#         with self.connection.cursor() as cursor:
#             cursor.execute("SELECT * FROM runners WHERE email = %s;", (email,))
#             return cursor.fetchone()

# # race_repository.py
# class RaceRepository:
#     def __init__(self, connection):
#         self.connection = connection

#     def create_race(self, name, date):
#         with self.connection.cursor() as cursor:
#             cursor.execute(
#                 "INSERT INTO races (name, date) VALUES (%s, %s) RETURNING id;", 
#                 (name, date)
#             )
#             return cursor.fetchone()[0]
