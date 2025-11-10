// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { HEADER_ROUTES } from './pages/header_routes';
import { COORDINADOR_ROUTES } from './coordinador/Routes-coord';
import { ADMIN_ROUTES } from './administrador/administrador_routes';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'administrador',
    children: ADMIN_ROUTES
  },
  ...HEADER_ROUTES,
  ...COORDINADOR_ROUTES,
  { path: '**', redirectTo: '' }
];
