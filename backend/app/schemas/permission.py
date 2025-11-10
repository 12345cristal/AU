from typing import Optional

from pydantic import BaseModel


class PermissionBase(BaseModel):
    nombre_permiso: str
    descripcion: Optional[str] = None


class PermissionCreate(PermissionBase):
    pass


class Permission(PermissionBase):
    id_permiso: int

    class Config:
        orm_mode = True
