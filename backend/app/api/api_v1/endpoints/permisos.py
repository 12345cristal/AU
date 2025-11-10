from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import ensure_admin, get_db_session
from app.crud import permission as permission_crud
from app.models.permission import Permission as PermissionModel
from app.schemas.permission import Permission, PermissionCreate

router = APIRouter()


@router.get("/", response_model=List[Permission])
def list_permissions(
    db: Session = Depends(get_db_session), _: None = Depends(ensure_admin)
) -> List[PermissionModel]:
    return db.query(PermissionModel).all()


@router.post("/", response_model=Permission, status_code=status.HTTP_201_CREATED)
def create_permission(
    permiso_in: PermissionCreate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> PermissionModel:
    existing = permission_crud.get_permission_by_name(db, permiso_in.nombre_permiso)
    if existing:
        raise HTTPException(status_code=400, detail="El permiso ya existe")
    return permission_crud.create_permission(db, permiso_in)
