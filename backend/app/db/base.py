# Import models here so Alembic can discover them.
from app.models.role import Role  # noqa: F401
from app.models.permission import Permission  # noqa: F401
from app.models.user import User  # noqa: F401
from app.models.personal import Personal  # noqa: F401
from app.models.roles_permissions import RolePermission  # noqa: F401
