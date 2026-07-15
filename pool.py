import psycopg2
from psycopg2 import pool
from contextlib import contextmanager

class DatabaseManager:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(DatabaseManager, cls).__new__(cls)
            cls._instance.connection_pool = None
        return cls._instance

    def initialize_pool(self, user, password, host, port, database):
        """Inicializa el pool de conexiones una sola vez."""
        if self.connection_pool is None:
            try:
                self.connection_pool = psycopg2.pool.SimpleConnectionPool(
                    minconn=1,   # Conexiones mínimas fijas
                    maxconn=10,  # Conexiones máximas simultáneas
                    user=user,
                    password=password,
                    host=host,
                    port=port,
                    database=database
                )
                print("✅ Pool de conexiones de PostgreSQL inicializado con éxito.")
            except psycopg2.DatabaseError as error:
                print(f"❌ Error al crear el pool: {error}")
                raise error

    @contextmanager
    def get_cursor(self):
        """Presta una conexión del pool y asegura su devolución automática."""
        if self.connection_pool is None:
            raise Exception("El pool de conexiones no ha sido inicializado.")
        
        # Obtiene una conexión libre del pool
        connection = self.connection_pool.getconn()
        # Crea el cursor para ejecutar la consulta
        cursor = connection.cursor()
        try:
            yield cursor
            connection.commit()  # Confirma cambios si no hay errores
        except Exception as error:
            connection.rollback()  # Cancela cambios si falla
            print(f"❌ Error ejecutando consulta: {error}")
            raise error
        finally:
            cursor.close()
            # Devuelve la conexión intacta al pool para que otra consulta la use
            self.connection_pool.putconn(connection)

    def close_all_connections(self):
        """Cierra el pool cuando la aplicación se apaga por completo."""
        if self.connection_pool:
            self.connection_pool.closeall()
            print("🛑 Pool de conexiones cerrado.")
