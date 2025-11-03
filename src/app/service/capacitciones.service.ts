import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  constructor() { }

  // Devuelve los cursos
  public getCursos() {
    return [
      {
        nombre: 'Introducción a Terapia ABA',
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
        nombre: 'Técnicas de Comunicación Aumentativa',
        descripcion: 'Sistemas alternativos de comunicación para niños con TEA',
        estado: 'En Progreso',
        progreso: 67,
        modulos: 6,
        horas: 8,
        participantes: 10,
        instructor: 'Lic. María Fernández',
        fechas: '20-27 Oct 2025',
        certificado: false
      },
      {
        nombre: 'Manejo de Crisis y Conductas Desafiantes',
        descripcion: 'Estrategias de intervención en situaciones de crisis',
        estado: 'Programada',
        progreso: 0,
        modulos: 5,
        horas: 6,
        participantes: 15,
        instructor: 'Dra. Sandra Morales',
        fechas: '5-12 Nov 2025',
        certificado: false
      },
      {
        nombre: 'Integración Sensorial',
        descripcion: 'Teoría y práctica de la integración sensorial en terapia ocupacional',
        estado: 'Programada',
        progreso: 0,
        modulos: 10,
        horas: 15,
        participantes: 8,
        instructor: 'Lic. Roberto Castillo',
        fechas: '18-30 Nov 2025',
        certificado: false
      }
    ];
  }

  // Devuelve estadísticas generales
  public getEstadisticas() {
    return {
      total: 4,
      completadas: 1,
      enProgreso: 1,
      participantes: 45
    };
  }

  // Próximas sesiones en vivo
  public getSesiones() {
    return [
      {
        curso: 'Técnicas de Comunicación Aumentativa - Módulo 5',
        fecha: 'Miércoles 30 Oct, 15:00 - 17:00'
      },
      {
        curso: 'Manejo de Crisis - Sesión de Introducción',
        fecha: 'Martes 5 Nov, 10:00 - 12:00'
      }
    ];
  }

}
