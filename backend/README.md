# Autismo Mochis API

Backend basado en FastAPI para gestionar la plataforma Autismo Mochis IA. Incluye autenticación JWT, administración de roles y permisos, y endpoints enfocados en el flujo de coordinadores.

## Requisitos

- Python 3.11+
- MySQL 8+

## Instalación

```bash
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
```

Crea un archivo `.env` dentro de `backend/` con la configuración mínima:

```
SECRET_KEY=tu_clave_ultra_secreta
MYSQL_USER=usuario
MYSQL_PASSWORD=contrasena
MYSQL_SERVER=localhost
MYSQL_PORT=3306
MYSQL_DB=AutismoMochis
```

## Migraciones

Este arranque inicial no incluye un sistema de migraciones. Se recomienda integrar Alembic antes de pasar a producción.

## Ejecución

```bash
uvicorn app.main:app --reload
```

La documentación interactiva estará disponible en:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
