from typing import Optional

from pydantic import BaseModel


class RoleBase(BaseModel):
    nombre_rol: str
    descripcion: Optional[str] = None


class RoleCreate(RoleBase):
    pass


class RoleUpdate(RoleBase):
    pass


class Role(RoleBase):
    id_rol: int

    class Config:
        orm_mode = True
