import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpedientesService {

  getResumen() {
    return {
      totalExpedientes: 4,
      activos: 4,
      documentos: 41,
      actualizadosHoy: 1,
      expedientes: [
        { id: 'EXP-2025-001', paciente: 'María González López', edad: '7 años', diagnostico: 'TEA', tutor: 'Sra. Ana López', servicios: ['Lenguaje','Psicología'], documentos: 8, ultimaAct: '24/10/2025', estado: 'Activo' },
        { id: 'EXP-2025-002', paciente: 'Juan Pérez Martínez', edad: '9 años', diagnostico: 'TDAH', tutor: 'Sr. Carlos Pérez', servicios: ['Psicología','Psicopedagogía'], documentos: 12, ultimaAct: '26/10/2025', estado: 'Activo' },
        { id: 'EXP-2025-003', paciente: 'Ana Rodríguez Cruz', edad: '6 años', diagnostico: 'Dislexia', tutor: 'Sra. María Rodríguez', servicios: ['Psicopedagogía'], documentos: 6, ultimaAct: '27/10/2025', estado: 'Activo' },
        { id: 'EXP-2025-004', paciente: 'Carlos Ramírez Torres', edad: '8 años', diagnostico: 'Parálisis Cerebral', tutor: 'Sra. Laura Torres', servicios: ['Fisioterapia','Neuromotor'], documentos: 15, ultimaAct: '25/10/2025', estado: 'Activo' },
      ]
    };
  }

  getActividadReciente() {
    return [
      { descripcion: 'Documento agregado a expediente de Ana Rodríguez', fecha: 'Hoy, 10:30 AM' },
      { descripcion: 'Reporte cuatrimestral actualizado - Juan Pérez', fecha: 'Ayer, 4:15 PM' },
      { descripcion: 'Nuevo plan de tratamiento - Carlos Ramírez', fecha: '26 Oct, 2:00 PM' },
    ];
  }
}
