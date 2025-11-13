// src/app/coordinador/Routes-coord.ts
import { Routes } from '@angular/router';

// Layout
import { LayoutComponent } from './layout/layout';

// Páginas principales
import { InicioComponent } from './pages/inicio/inicio';
import { UsuariosComponent } from './pages/usuarios/usuarios';
import { CitasComponent } from './pages/citas/citas';
import { PadresComponent } from './pages/padres/padres';
import { RecursosComponent } from './pages/recursos/recursos';
import { MensajesComponent } from './pages/mensajes/mensajes';
import { ParteClinicaComponent } from './pages/parte-clinica/parte-clinica';
import { HorariosComponent } from './pages/horarios/horarios';
import { ExpedientesComponent } from './pages/expedientes-clinicos/expedientes-clinicos';
import { FiltroAccesoComponent } from './pages/filtros-acceso/filtros-acceso';
import { NuevoBeneficiarioComponent } from './pages/nuevo-beneficiario/nuevo-beneficiario';
import { ReportesCoordinadorComponent } from './pages/reportes/reportes';

// Parte clínica hijos
import { PlanesComponent } from './pages/parte-clinica/planes/planes';
import { NotasComponent } from './pages/parte-clinica/notas/notas';
import { PacientesComponent } from './pages/parte-clinica/pacientes/pacientes';

// Módulos nuevos
import { AsistenteIAComponent } from './pages/asistente-ia/asistente-ia';
import { CapacitacionesComponent } from './pages/capacitaciones/capacitaciones';

// === PERSONAL - NUEVA ESTRUCTURA ===
import { Lista} from './pages/personal/lista/lista';
import { Detalle } from './pages/personal/detalle/detalle';
import { Formulario } from './pages/personal/formulario/formulario';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

export const COORDINADOR_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },

      // Principales
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'citas', component: CitasComponent },

      // === PERSONAL COMPLETO ===
      {
        path: 'personal',
        children: [
          { path: '', component: Lista},                 // Lista
          { path: 'nuevo', component: Formulario },      // Crear
          { path: ':id', component: Detalle },           // Detalle
          { path: ':id/editar', component: Formulario }, // Editar
        ]
      },

      { path: 'padres', component: PadresComponent },
      { path: 'recursos', component: RecursosComponent },
      { path: 'mensajes', component: MensajesComponent },

      // Parte clínica
      {
        path: 'parte-clinica',
        component: ParteClinicaComponent,
        children: [
          { path: '', redirectTo: 'planes', pathMatch: 'full' },
          { path: 'planes', component: PlanesComponent },
          { path: 'notas', component: NotasComponent },
          { path: 'pacientes', component: PacientesComponent }
        ]
      },

      // Extras
      { path: 'asistente-ia', component: AsistenteIAComponent },
      { path: 'capacitaciones', component: CapacitacionesComponent },
      { path: 'horarios', component: HorariosComponent },
      { path: 'expedientes-clinicos', component: ExpedientesComponent },
      { path: 'filtros-acceso', component: FiltroAccesoComponent },
      { path: 'nuevo-beneficiario', component: NuevoBeneficiarioComponent },
      { path: 'reportes', component: ReportesCoordinadorComponent }
    ]
  }
];
