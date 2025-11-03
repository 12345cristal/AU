import { Injectable } from '@angular/core';

export interface Cita {
  hora: string;
  duracion: number; // minutos
  paciente: string;
  tipoTerapia: string;
  terapeuta: string;
  estado: 'Completada' | 'En Proceso' | 'Pendiente';
}

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor() { }

  getCitasHoy(): Cita[] {
    return [
      { hora: '09:00', duracion: 60, paciente: 'María González López', tipoTerapia: 'Terapia de Lenguaje', terapeuta: 'Dra. Carmen Ruiz', estado: 'Completada' },
      { hora: '10:00', duracion: 45, paciente: 'Juan Pérez Martínez', tipoTerapia: 'Psicología', terapeuta: 'Lic. Roberto Sánchez', estado: 'Completada' },
      { hora: '11:00', duracion: 60, paciente: 'Ana Rodríguez Cruz', tipoTerapia: 'Psicopedagogía', terapeuta: 'Dra. Patricia Flores', estado: 'En Proceso' },
      { hora: '13:00', duracion: 45, paciente: 'Carlos Ramírez Torres', tipoTerapia: 'Fisioterapia', terapeuta: 'Lic. Miguel Ángel López', estado: 'Pendiente' },
      { hora: '14:00', duracion: 60, paciente: 'Laura Hernández Gómez', tipoTerapia: 'Terapia Neuromotora', terapeuta: 'Dr. José Luis Morales', estado: 'Pendiente' },
    ];
  }

  // Futuro: obtener citas de la próxima semana
  getCitasProximaSemana(): Cita[] {
    return [];
  }
}
