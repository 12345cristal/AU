import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Evento {
  nombre: string;
  terapia: string;
  duracion: number;
  tipo: 'regular' | 'reposicion' | 'capacitacion';
}

export interface Dia {
  eventos: Evento[];
}

export interface Slot {
  hora: string;
  dias: Dia[]; // Siempre debe tener objetos Dia con "eventos"
}

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  constructor() {}

  getHorarios(): Observable<Slot[]> {
    const data: Slot[] = [
      {
        hora: '08:00',
        dias: [
          { eventos: [{ nombre: 'María González', terapia: 'Lenguaje', duracion: 60, tipo: 'regular' }] },
          { eventos: [{ nombre: 'Carlos Ramírez', terapia: 'Fisioterapia', duracion: 45, tipo: 'reposicion' }] },
          { eventos: [{ nombre: 'Diego López', terapia: 'Psicología', duracion: 45, tipo: 'regular' }] },
          { eventos: [] },
          { eventos: [] },
          { eventos: [] },
          { eventos: [] }
        ]
      },
      {
        hora: '09:00',
        dias: [
          { eventos: [{ nombre: 'Juan Pérez', terapia: 'Psicología', duracion: 45, tipo: 'regular' }] },
          { eventos: [{ nombre: 'Sofía Martínez', terapia: 'Lenguaje', duracion: 60, tipo: 'regular' }] },
          { eventos: [{ nombre: 'Lucas Fernández', terapia: 'Fisioterapia', duracion: 45, tipo: 'regular' }] },
          { eventos: [] },
          { eventos: [] },
          { eventos: [] },
          { eventos: [] }
        ]
      }
    ];

    return of(data);
  }
}
