from datetime import datetime, timedelta

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.api.deps import authenticate, get_db_session
from app.core.config import get_settings
from app.core.security import create_token
from app.schemas.auth import LoginRequest
from app.schemas.token import Token

router = APIRouter()


def _create_access_token(correo: str) -> Token:
    settings = get_settings()
    expires_delta = timedelta(minutes=settings.access_token_expire_minutes)
    expires_at = datetime.utcnow() + expires_delta
    access_token = create_token({"sub": correo}, expires_delta=expires_delta)
    return Token(access_token=access_token, expires_at=expires_at)


@router.post("/login", response_model=Token)
def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db_session)
) -> Token:
    user = authenticate(db, form_data.username, form_data.password)
    return _create_access_token(user.correo)


@router.post("/login-json", response_model=Token)
def login_with_json(
    credentials: LoginRequest, db: Session = Depends(get_db_session)
) -> Token:
    user = authenticate(db, credentials.correo, credentials.contrasena)
    return _create_access_token(user.correo)
