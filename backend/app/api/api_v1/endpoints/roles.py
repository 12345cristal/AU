from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import ensure_admin, get_db_session
from app.crud import role as role_crud
from app.models.role import Role as RoleModel
from app.schemas.role import Role, RoleCreate, RoleUpdate

router = APIRouter()


@router.get("/", response_model=List[Role])
def list_roles(
    db: Session = Depends(get_db_session), _: None = Depends(ensure_admin)
) -> List[RoleModel]:
    return db.query(RoleModel).all()


@router.post("/", response_model=Role, status_code=status.HTTP_201_CREATED)
def create_role(
    role_in: RoleCreate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> RoleModel:
    existing = role_crud.get_role_by_name(db, role_in.nombre_rol)
    if existing:
        raise HTTPException(status_code=400, detail="El rol ya existe")
    return role_crud.create_role(db, role_in)


@router.put("/{role_id}", response_model=Role)
def update_role(
    role_id: int,
    role_in: RoleUpdate,
    db: Session = Depends(get_db_session),
    _: None = Depends(ensure_admin),
) -> RoleModel:
    role = role_crud.get_role(db, role_id)
    if not role:
        raise HTTPException(status_code=404, detail="Rol no encontrado")
    return role_crud.update_role(db, role, role_in)


@router.delete("/{role_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_role(
    role_id: int, db: Session = Depends(get_db_session), _: None = Depends(ensure_admin)
) -> None:
    role = role_crud.get_role(db, role_id)
    if not role:
        raise HTTPException(status_code=404, detail="Rol no encontrado")
    role_crud.delete_role(db, role)
