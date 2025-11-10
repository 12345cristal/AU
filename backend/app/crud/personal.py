from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.personal import Personal
from app.schemas.user import PersonalCreate


def get_personal(db: Session, personal_id: int) -> Optional[Personal]:
    return db.query(Personal).filter(Personal.id_personal == personal_id).first()


def get_personal_by_usuario(db: Session, user_id: int) -> Optional[Personal]:
    return db.query(Personal).filter(Personal.id_usuario == user_id).first()


def get_coordinadores(db: Session, limit: int = 100, skip: int = 0) -> List[Personal]:
    return (
        db.query(Personal)
        .join(Personal.usuario)
        .join(Personal.usuario.rol)
        .filter(Personal.usuario.rol.nombre_rol.ilike("%coordinador%"))
        .offset(skip)
        .limit(limit)
        .all()
    )


def create_personal(db: Session, personal_in: PersonalCreate) -> Personal:
    personal = Personal(**personal_in.dict())
    db.add(personal)
    db.commit()
    db.refresh(personal)
    return personal
