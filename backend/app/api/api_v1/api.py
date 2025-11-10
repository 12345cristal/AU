from fastapi import APIRouter

from app.api.api_v1.endpoints import auth, roles, permisos, coordinadores, usuarios

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(roles.router, prefix="/roles", tags=["roles"])
api_router.include_router(permisos.router, prefix="/permisos", tags=["permisos"])
api_router.include_router(usuarios.router, prefix="/usuarios", tags=["usuarios"])
api_router.include_router(coordinadores.router, prefix="/coordinadores", tags=["coordinadores"])
