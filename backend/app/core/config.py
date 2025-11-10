from functools import lru_cache
from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    project_name: str = Field("Autismo Mochis API", description="Nombre del proyecto")
    api_v1_str: str = "/api/v1"
    secret_key: str = Field(..., env="SECRET_KEY")
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60
    refresh_token_expire_minutes: int = 60 * 24 * 7

    mysql_user: str = Field(..., env="MYSQL_USER")
    mysql_password: str = Field(..., env="MYSQL_PASSWORD")
    mysql_server: str = Field(..., env="MYSQL_SERVER")
    mysql_db: str = Field(..., env="MYSQL_DB")
    mysql_port: int = Field(3306, env="MYSQL_PORT")

    class Config:
        env_file = ".env"
        case_sensitive = True

    @property
    def sqlalchemy_database_uri(self) -> str:
        return (
            f"mysql+pymysql://{self.mysql_user}:{self.mysql_password}"
            f"@{self.mysql_server}:{self.mysql_port}/{self.mysql_db}"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()
