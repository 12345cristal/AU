// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { HEADER_ROUTES } from './Rutas/header_routes';
import { COORDINADOR_ROUTES } from './coordinador/Routes-coord';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  ...HEADER_ROUTES,
  ...COORDINADOR_ROUTES,
  { path: '**', redirectTo: '' },

];
