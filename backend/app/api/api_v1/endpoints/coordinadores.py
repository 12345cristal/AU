from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import ensure_admin, get_db_session
from app.crud import personal as personal_crud
from app.models.personal import Personal as PersonalModel
from app.schemas.user import Personal, PersonalCreate

router = APIRouter()


@router.get("/", response_model=List[Personal])
def list_coordinadores(
    db: Session = Depends(get_db_session), _: None = Depends(ensure_admin)
) -> List[PersonalModel]:
    return personal_crud.get_coordinadores(db)


@router.post("/", response_model=Personal, status_code=status.HTTP_201_CREATED)
def create_coordinador(
    coordinador_in: PersonalCreate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> PersonalModel:
    existing = personal_crud.get_personal_by_usuario(db, coordinador_in.id_usuario)
    if existing:
        raise HTTPException(status_code=400, detail="El coordinador ya existe")
    return personal_crud.create_personal(db, coordinador_in)
