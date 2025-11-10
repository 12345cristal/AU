from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Permission(Base):
    __tablename__ = "permisos"

    id_permiso = Column(Integer, primary_key=True, index=True)
    nombre_permiso = Column(String(100), unique=True, nullable=False)
    descripcion = Column(Text)

    roles = relationship(
        "Role",
        secondary="roles_permisos",
        back_populates="permisos",
    )
