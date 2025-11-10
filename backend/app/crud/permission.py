from typing import Optional

from sqlalchemy.orm import Session

from app.models.permission import Permission
from app.schemas.permission import PermissionCreate


def get_permission_by_name(db: Session, nombre: str) -> Optional[Permission]:
    return db.query(Permission).filter(Permission.nombre_permiso == nombre).first()


def create_permission(db: Session, permiso_in: PermissionCreate) -> Permission:
    permiso = Permission(**permiso_in.dict())
    db.add(permiso)
    db.commit()
    db.refresh(permiso)
    return permiso
