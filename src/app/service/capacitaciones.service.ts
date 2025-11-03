import { Injectable } from '@angular/core';

export interface Modulo {
  nombre: string;
  completado: boolean;
}

export interface Capacitacion {
  titulo: string;
  descripcion: string;
  estado: 'Completada' | 'En Progreso' | 'Programada';
  progreso: number; // %
  modulos: number;
  horas: number;
  participantes: number;
  instructor: string;
  fechas: string; // rango de fechas
  certificado?: boolean;
  proximasSesiones?: { fecha: string, hora: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  constructor() { }

  getCapacitaciones(): Capacitacion[] {
    return [
      {
        titulo: 'Introducción a Terapia ABA',
        descripcion: 'Fundamentos del Análisis Aplicado de Conducta para tratamiento del autismo',
        estado: 'Completada',
        progreso: 100,
        modulos: 8,
        horas: 12,
        participantes: 12,
        instructor: 'Dr. Antonio García',
        fechas: '15-22 Oct 2025',
        certificado: true
      },
      {
        titulo: 'Técnicas de Comunicación Aumentativa',
        descripcion: 'Sistemas alternativos de comunicación para niños con TEA',
        estado: 'En Progreso',
        progreso: 67,
        modulos: 6,
        horas: 8,
        participantes: 10,
        instructor: 'Lic. María Fernández',
        fechas: '20-27 Oct 2025',
      },
      {
        titulo: 'Manejo de Crisis y Conductas Desafiantes',
        descripcion: 'Estrategias de intervención en situaciones de crisis',
        estado: 'Programada',
        progreso: 0,
        modulos: 5,
        horas: 6,
        participantes: 15,
        instructor: 'Dra. Sandra Morales',
        fechas: '5-12 Nov 2025',
      },
      {
        titulo: 'Integración Sensorial',
        descripcion: 'Teoría y práctica de la integración sensorial en terapia ocupacional',
        estado: 'Programada',
        progreso: 0,
        modulos: 10,
        horas: 15,
        participantes: 8,
        instructor: 'Lic. Roberto Castillo',
        fechas: '18-30 Nov 2025',
      }
    ];
  }
}
