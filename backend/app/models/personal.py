from datetime import datetime

from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Personal(Base):
    __tablename__ = "personal"

    id_personal = Column(Integer, primary_key=True, index=True)
    id_usuario = Column(Integer, ForeignKey("usuarios.id_usuario", ondelete="CASCADE", onupdate="CASCADE"), unique=True, nullable=False)
    fecha_nacimiento = Column(Date)
    grado_academico = Column(String(150))
    especialidades = Column(Text)
    telefono_personal = Column(String(20))
    correo_personal = Column(String(100))
    rfc = Column(String(25))
    ine = Column(String(25))
    curp = Column(String(25))
    domicilio_calle = Column(String(100))
    domicilio_colonia = Column(String(100))
    domicilio_cp = Column(String(10))
    domicilio_municipio = Column(String(100))
    domicilio_estado = Column(String(100))
    cv_archivo = Column(String(255))
    experiencia = Column(Text)
    creado_en = Column(DateTime, default=datetime.utcnow)
    actualizado_en = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    usuario = relationship("User", back_populates="personal")
