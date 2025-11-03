import { Component } from '@angular/core';

interface Expediente {
  id: string;
  paciente: string;
  nacimiento: string;
  edad: string;
  diagnostico: string;
  tutor: string;
  servicios: string[];
  documentos: number;
  ultimaActualizacion: string;
  estado: string;
}

@Component({
  selector: 'app-expedientes-clinicos',
  templateUrl: './expedientes-clinicos.html',
  styleUrls: ['./expedientes-clinicos.scss']
})
export class ExpedientesComponent {
  totalExpedientes = 4;
  activos = 4;
  documentos = 41;
  actualizadosHoy = 1;

  // Datos de ejemplo, en el futuro se obtendrán del backend
  expediente1: Expediente = {
    id: 'EXP-2025-001',
    paciente: 'María González López',
    nacimiento: '14/3/2018',
    edad: '7 años',
    diagnostico: 'TEA',
    tutor: 'Sra. Ana López',
    servicios: ['Lenguaje', 'Psicología'],
    documentos: 8,
    ultimaActualizacion: '24/10/2025',
    estado: 'Activo'
  };

  expediente2: Expediente = {
    id: 'EXP-2025-002',
    paciente: 'Juan Pérez Martínez',
    nacimiento: '21/7/2016',
    edad: '9 años',
    diagnostico: 'TDAH',
    tutor: 'Sr. Carlos Pérez',
    servicios: ['Psicología', 'Psicopedagogía'],
    documentos: 12,
    ultimaActualizacion: '26/10/2025',
    estado: 'Activo'
  };

  expediente3: Expediente = {
    id: 'EXP-2025-003',
    paciente: 'Ana Rodríguez Cruz',
    nacimiento: '9/1/2019',
    edad: '6 años',
    diagnostico: 'Dislexia',
    tutor: 'Sra. María Rodríguez',
    servicios: ['Psicopedagogía'],
    documentos: 6,
    ultimaActualizacion: '27/10/2025',
    estado: 'Activo'
  };

  expediente4: Expediente = {
    id: 'EXP-2025-004',
    paciente: 'Carlos Ramírez Torres',
    nacimiento: '4/11/2017',
    edad: '8 años',
    diagnostico: 'Parálisis Cerebral',
    tutor: 'Sra. Laura Torres',
    servicios: ['Fisioterapia', 'Neuromotor'],
    documentos: 15,
    ultimaActualizacion: '25/10/2025',
    estado: 'Activo'
  };
}
