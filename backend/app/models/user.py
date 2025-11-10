from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class User(Base):
    __tablename__ = "usuarios"

    id_usuario = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(50), nullable=False)
    apellido_paterno = Column(String(50))
    apellido_materno = Column(String(50))
    correo = Column(String(100), unique=True, nullable=False, index=True)
    contrasena_hash = Column(String(255), nullable=False)
    telefono = Column(String(20))
    id_rol = Column(Integer, ForeignKey("roles.id_rol", ondelete="RESTRICT", onupdate="CASCADE"), nullable=False)
    foto_perfil = Column(String(255))
    activo = Column(Boolean, default=True)
    ultimo_login = Column(DateTime)
    creado_en = Column(DateTime, default=datetime.utcnow)
    actualizado_en = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    rol = relationship("Role", back_populates="usuarios")
    personal = relationship("Personal", back_populates="usuario", uselist=False)

    def full_name(self) -> str:
        apellidos = " ".join(filter(None, [self.apellido_paterno, self.apellido_materno]))
        return f"{self.nombre} {apellidos}".strip()
