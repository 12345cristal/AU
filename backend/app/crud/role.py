from typing import Optional

from sqlalchemy.orm import Session

from app.models.role import Role
from app.schemas.role import RoleCreate, RoleUpdate


def get_role(db: Session, role_id: int) -> Optional[Role]:
    return db.query(Role).filter(Role.id_rol == role_id).first()


def get_role_by_name(db: Session, nombre: str) -> Optional[Role]:
    return db.query(Role).filter(Role.nombre_rol == nombre).first()


def create_role(db: Session, role_in: RoleCreate) -> Role:
    role = Role(**role_in.dict())
    db.add(role)
    db.commit()
    db.refresh(role)
    return role


def update_role(db: Session, role: Role, role_in: RoleUpdate) -> Role:
    for field, value in role_in.dict(exclude_unset=True).items():
        setattr(role, field, value)
    db.add(role)
    db.commit()
    db.refresh(role)
    return role


def delete_role(db: Session, role: Role) -> None:
    db.delete(role)
    db.commit()
