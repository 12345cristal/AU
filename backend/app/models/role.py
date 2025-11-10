from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Role(Base):
    __tablename__ = "roles"

    id_rol = Column(Integer, primary_key=True, index=True)
    nombre_rol = Column(String(100), unique=True, nullable=False)
    descripcion = Column(Text)

    usuarios = relationship("User", back_populates="rol", cascade="all,delete")
    permisos = relationship(
        "Permission",
        secondary="roles_permisos",
        back_populates="roles",
        passive_deletes=True,
    )
