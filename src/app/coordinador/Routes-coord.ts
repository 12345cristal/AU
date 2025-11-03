// src/app/coordinador/Routes-coord.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { InicioComponent } from './pages/inicio/inicio';
import { UsuariosComponent } from './pages/usuarios/usuarios';
import { CitasComponent } from './pages/citas/citas';
import { TerapeutasComponent } from './pages/terapeutas/terapeutas';
import { PadresComponent } from './pages/padres/padres';
import { RecursosComponent } from './pages/recursos/recursos';
import { MensajesComponent } from './pages/mensajes/mensajes';
import { ParteClinicaComponent } from './pages/parte-clinica/parte-clinica';
import { HorariosComponent } from './pages/horarios/horarios';
import { ExpedientesClinicosComponent } from './pages/expedientes-clinicos/expedientes-clinicos';
import { FiltrosAccesoComponent } from './pages/filtros-acceso/filtros-acceso';
import { NuevoBeneficiarioComponent } from './pages/nuevo-beneficiario/nuevo-beneficiario';
import { ReportesComponent } from './pages/reportes/reportes';

export const COORDINADOR_ROUTES: Routes = [
  {
    path: 'coordinador',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'terapeutas', component: TerapeutasComponent },
      { path: 'padres', component: PadresComponent },
      { path: 'recursos', component: RecursosComponent },
      { path: 'mensajes', component: MensajesComponent },
      { path: 'parte-clinica', component: ParteClinicaComponent },
      { path: 'horarios', component: HorariosComponent },
      { path: 'expedientes-clinicos', component: ExpedientesClinicosComponent },
      { path: 'filtros-acceso', component: FiltrosAccesoComponent },
      { path: 'nuevo-beneficiario', component: NuevoBeneficiarioComponent },
      { path: 'reportes', component: ReportesComponent },
    ]
  }
];
