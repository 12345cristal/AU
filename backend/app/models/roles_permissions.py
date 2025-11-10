from sqlalchemy import Column, ForeignKey, Integer

from app.db.base_class import Base


class RolePermission(Base):
    __tablename__ = "roles_permisos"

    id_rol = Column(Integer, ForeignKey("roles.id_rol", ondelete="CASCADE", onupdate="CASCADE"), primary_key=True)
    id_permiso = Column(
        Integer,
        ForeignKey("permisos.id_permiso", ondelete="CASCADE", onupdate="CASCADE"),
        primary_key=True,
    )
