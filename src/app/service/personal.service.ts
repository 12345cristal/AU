import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Interface para los datos de resumen (tarjetas superiores)
 */
export interface PersonalSummary {
  totalPersonal: number;
  terapeutas: number;
  personalActivo: number;
  calificacionPromedio: number;
}

/**
 * Interface para los datos de un miembro del personal (tarjetas inferiores)
 */
export interface PersonalMember {
  id: number;
  nombre: string;
  rol: string;
  activo: boolean;
  iniciales: string;
  email: string;
  telefono: string;
  fechaIngreso: string;
  pacientes: number;
  sesionesSem: number;
  calificacion: number;
  especialidades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor() {}

  /**
   * Simula el resumen superior
   */
  getPersonalSummary(): Observable<PersonalSummary> {
    const resumen: PersonalSummary = {
      totalPersonal: 8,
      terapeutas: 5,
      personalActivo: 7,
      calificacionPromedio: 9.2
    };
    return of(resumen);
  }

  /**
   * Simula la lista de personal
   */
  getPersonalList(): Observable<PersonalMember[]> {
    const lista: PersonalMember[] = [
      {
        id: 1,
        nombre: 'Johana Pérez',
        rol: 'Terapeuta',
        activo: true,
        iniciales: 'JP',
        email: 'johana@centro.com',
        telefono: '667-201-3345',
        fechaIngreso: '2021-04-20',
        pacientes: 8,
        sesionesSem: 15,
        calificacion: 9.4,
        especialidades: ['Lenguaje', 'Motricidad']
      },
      {
        id: 2,
        nombre: 'Luis García',
        rol: 'Coordinador',
        activo: true,
        iniciales: 'LG',
        email: 'luis@centro.com',
        telefono: '667-998-2311',
        fechaIngreso: '2020-08-10',
        pacientes: 3,
        sesionesSem: 6,
        calificacion: 8.8,
        especialidades: ['Organización', 'Supervisión']
      }
    ];
    return of(lista);
  }
}
