import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { AuthGuard } from './auth/auth.guard';

import { HEADER_ROUTES } from './pages/header_routes';
import { COORDINADOR_ROUTES } from './coordinador/Routes-coord';
import { ADMIN_ROUTES } from './administrador/administrador_routes';
import { PADRES_ROUTES } from './padres/padres.routes';

export const routes: Routes = [
  // Página de inicio (landing)
  { path: '', component: LandingPageComponent, pathMatch: 'full' },

  // 🔐 Login
  { path: 'login', component: Login },

  // 👨‍💼 Administrador (protegido)
  {
    path: 'administrador',
    canActivate: [AuthGuard],
    children: ADMIN_ROUTES
  },

  // 👨‍🏫 Coordinador (protegido)
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

  // 🌐 Rutas compartidas (encabezado, etc.)
  ...HEADER_ROUTES,

  // 🚫 Ruta por defecto si no coincide ninguna
  { path: '**', redirectTo: '' }
];
