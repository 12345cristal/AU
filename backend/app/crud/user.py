from typing import Optional

from sqlalchemy.orm import Session

from app.core.security import get_password_hash
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate


def get_user_by_email(db: Session, correo: str) -> Optional[User]:
    return db.query(User).filter(User.correo == correo).first()


def get_user(db: Session, user_id: int) -> Optional[User]:
    return db.query(User).filter(User.id_usuario == user_id).first()


def create_user(db: Session, user_in: UserCreate) -> User:
    user = User(
        nombre=user_in.nombre,
        apellido_paterno=user_in.apellido_paterno,
        apellido_materno=user_in.apellido_materno,
        correo=user_in.correo,
        contrasena_hash=get_password_hash(user_in.contrasena),
        telefono=user_in.telefono,
        id_rol=user_in.id_rol,
        foto_perfil=user_in.foto_perfil,
        activo=user_in.activo,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def update_user(db: Session, user: User, user_in: UserUpdate) -> User:
    for field, value in user_in.dict(exclude_unset=True).items():
        setattr(user, field, value)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
