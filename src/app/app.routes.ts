import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { AuthGuard } from './auth/auth.guard';

// 🔹 Rutas modulares
import { HEADER_ROUTES } from './pages/header_routes';
import { COORDINADOR_ROUTES } from './coordinador/Routes-coord';
import { ADMIN_ROUTES } from './administrador/administrador_routes';
import { PADRES_ROUTES } from './padres/padres.routes';

export const routes: Routes = [
  // 🏠 Página principal (landing)
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },

  // 🔐 Página de inicio de sesión
  {
    path: 'login',
    component: Login
  },

  // 👑 Administrador (protegido)
  {
    path: 'administrador',
    canActivate: [AuthGuard],
    children: ADMIN_ROUTES
  },

  // 🧑‍🏫 Coordinador (protegido)
  {
    path: 'coordinador',
    canActivate: [AuthGuard],
    children: COORDINADOR_ROUTES
  },

  // 👪 Padres (protegido)
  {
    path: 'padres',
    canActivate: [AuthGuard],
    children: PADRES_ROUTES
  },

  // 🌐 Rutas compartidas (encabezado, menús, etc.)
  ...HEADER_ROUTES,

  // 🚫 Redirección si no existe la ruta
  {
    path: '**',
    redirectTo: ''
  }
];
