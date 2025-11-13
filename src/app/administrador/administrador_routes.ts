import { Routes } from '@angular/router';
import { AdministradorComponent } from './administrador';
import { InicioAdministrador } from './pages/inicio/inicio';
import { AsistenteIAComponent } from '../coordinador/pages/asistente-ia/asistente-ia';
import { AnalisisAvanzado } from './pages/analisis-avanzado/analisis-avanzado';
import { Mensajes } from './pages/mensajes/mensajes';
import { Comunicados } from './pages/comunicados/comunicados';
import { Pagos } from './pages/pagos/pagos';
import { Publicidad } from './pages/publicidad/publicidad';
import { Ventas } from './pages/ventas/ventas';
import { Usuarios } from './pages/usuarios/usuarios';
import { ReportesAdministradorComponent } from './pages/reportes/reportes';
import { Perfil } from './components/perfil/perfil';
import { Logout } from './components/logout/logout';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      { path: 'inicio', component: InicioAdministrador },
      { path: 'ia', component: AsistenteIAComponent },
      { path: 'analisis-avanzado', component: AnalisisAvanzado },
      { path: 'mensajes', component: Mensajes },
      { path: 'comunicados', component: Comunicados },
      { path: 'pagos', component: Pagos },
      { path: 'publicidad', component: Publicidad },
      { path: 'ventas', component: Ventas },
      { path: 'usuarios', component: Usuarios },
      { path: 'reportes', component: ReportesAdministradorComponent },
      { path: 'perfil', component: Perfil },
      { path: 'logout', component: Logout },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: '**', redirectTo: 'inicio' }
    ],
  },
];