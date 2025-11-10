from datetime import datetime, date
from typing import Optional

from pydantic import BaseModel, EmailStr

from .role import Role


class UserBase(BaseModel):
    nombre: str
    apellido_paterno: Optional[str] = None
    apellido_materno: Optional[str] = None
    correo: EmailStr
    telefono: Optional[str] = None
    id_rol: int
    foto_perfil: Optional[str] = None
    activo: Optional[bool] = True


class UserCreate(UserBase):
    contrasena: str


class UserUpdate(BaseModel):
    nombre: Optional[str] = None
    apellido_paterno: Optional[str] = None
    apellido_materno: Optional[str] = None
    telefono: Optional[str] = None
    id_rol: Optional[int] = None
    foto_perfil: Optional[str] = None
    activo: Optional[bool] = None


class User(UserBase):
    id_usuario: int
    rol: Role
    ultimo_login: Optional[datetime]
    creado_en: datetime
    actualizado_en: datetime

    class Config:
        orm_mode = True


class PersonalBase(BaseModel):
    fecha_nacimiento: Optional[date] = None
    grado_academico: Optional[str] = None
    especialidades: Optional[str] = None
    telefono_personal: Optional[str] = None
    correo_personal: Optional[EmailStr] = None
    rfc: Optional[str] = None
    ine: Optional[str] = None
    curp: Optional[str] = None
    domicilio_calle: Optional[str] = None
    domicilio_colonia: Optional[str] = None
    domicilio_cp: Optional[str] = None
    domicilio_municipio: Optional[str] = None
    domicilio_estado: Optional[str] = None
    cv_archivo: Optional[str] = None
    experiencia: Optional[str] = None


class PersonalCreate(PersonalBase):
    id_usuario: int


class Personal(PersonalBase):
    id_personal: int
    usuario: User

    class Config:
        orm_mode = True
