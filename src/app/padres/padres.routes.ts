import { Routes } from '@angular/router';
import { PadresLayoutComponent } from './pages/padres/pages/padres-layout/padres-layout.component';
import { Inicio } from './pages/padres/pages/inicio/inicio.component';

export const PADRES_ROUTES: Routes = [
  {
    path: '',
    component: PadresLayoutComponent,
    children: [
      { path: 'inicio', component: Inicio },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];
