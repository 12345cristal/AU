import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private planes = [
    {
      nombre: 'María González López',
      diagnostico: 'TEA',
      servicios: ['Lenguaje', 'Psicología']
    },
    {
      nombre: 'Juan Pérez Martínez',
      diagnostico: 'TDAH',
      servicios: ['Psicología', 'Psicopedagogía']
    },
    {
      nombre: 'Ana Rodríguez Cruz',
      diagnostico: 'Dislexia',
      servicios: ['Psicopedagogía']
    },
    {
      nombre: 'Carlos Ramírez Torres',
      diagnostico: 'Parálisis Cerebral',
      servicios: ['Fisioterapia', 'Neuromotor']
    }
  ];

  constructor() {}

  getPlanes() {
    return this.planes;
  }
}
