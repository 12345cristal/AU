from typing import Generator

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.security import verify_password
from app.db.session import get_db
from app.models.user import User
from app.schemas.token import TokenPayload

reuseable_oauth = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


def get_db_session() -> Generator[Session, None, None]:
    yield from get_db()


def get_current_user(
    db: Session = Depends(get_db_session), token: str = Depends(reuseable_oauth)
) -> User:
    settings = get_settings()
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="No se pudo validar el token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])
        token_data = TokenPayload(**payload)
    except JWTError as exc:  # pragma: no cover - jose error includes message
        raise credentials_exception from exc

    user = db.query(User).filter(User.correo == token_data.sub).first()
    if user is None:
        raise credentials_exception
    if not user.activo:
        raise HTTPException(status_code=403, detail="Usuario deshabilitado")
    return user


def authenticate(db: Session, correo: str, contrasena: str) -> User:
    user = db.query(User).filter(User.correo == correo).first()
    if not user or not verify_password(contrasena, user.contrasena_hash):
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")
    return user


def ensure_admin(user: User = Depends(get_current_user)) -> User:
    if user.rol and "admin" in user.rol.nombre_rol.lower():
        return user
    raise HTTPException(status_code=403, detail="Se requieren privilegios de administrador")
