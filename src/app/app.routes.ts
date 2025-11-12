import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { AuthGuard } from './auth/auth.guard';

import { HEADER_ROUTES } from './pages/header_routes';
import { COORDINADOR_ROUTES } from './coordinador/Routes-coord';
import { ADMIN_ROUTES } from './administrador/administrador_routes';

export const routes: Routes = [
  // 🏠 Página principal (pública)
  { path: '', component: LandingPageComponent, pathMatch: 'full' },

  // 🔐 Login
  { path: 'login', component: Login },

  // 👑 Rutas de administrador (protegidas)
  {
    path: 'administrador',
    canActivate: [AuthGuard],
    children: ADMIN_ROUTES
  },

  // 🧑‍🏫 Rutas de coordinador (protegidas)
  {
    path: 'coordinador',
    canActivate: [AuthGuard],
    children: COORDINADOR_ROUTES
  },

  // 🧩 Rutas del encabezado (compartidas)
  ...HEADER_ROUTES,

  // 🚫 Cualquier ruta desconocida vuelve al inicio
  { path: '**', redirectTo: '' }
];
