from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import ensure_admin, get_current_user, get_db_session
from app.crud import user as user_crud
from app.models.user import User as UserModel
from app.schemas.user import User, UserCreate, UserUpdate

router = APIRouter()


@router.get("/me", response_model=User)
def read_me(current_user: UserModel = Depends(get_current_user)) -> UserModel:
    return current_user


@router.post("/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(
    user_in: UserCreate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> UserModel:
    existing = user_crud.get_user_by_email(db, user_in.correo)
    if existing:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")
    return user_crud.create_user(db, user_in)


@router.get("/", response_model=List[User])
def list_users(
    db: Session = Depends(get_db_session), _: None = Depends(ensure_admin)
) -> List[UserModel]:
    return db.query(UserModel).all()


@router.put("/{user_id}", response_model=User)
def update_user(
    user_id: int,
    user_in: UserUpdate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> UserModel:
    user = user_crud.get_user(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user_crud.update_user(db, user, user_in)
