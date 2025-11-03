import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private pacientes = [
    {
      nombre: 'María González López',
      edad: '7 años',
      diagnostico: 'TEA',
      servicios: ['Lenguaje', 'Psicología'],
      estado: 'Activo'
    },
    {
      nombre: 'Juan Pérez Martínez',
      edad: '9 años',
      diagnostico: 'TDAH',
      servicios: ['Psicología', 'Psicopedagogía'],
      estado: 'Activo'
    },
    {
      nombre: 'Ana Rodríguez Cruz',
      edad: '6 años',
      diagnostico: 'Dislexia',
      servicios: ['Psicopedagogía'],
      estado: 'Activo'
    },
    {
      nombre: 'Carlos Ramírez Torres',
      edad: '8 años',
      diagnostico: 'Parálisis Cerebral',
      servicios: ['Fisioterapia', 'Neuromotor'],
      estado: 'Activo'
    }
  ];

  constructor() {}

  getPacientes() {
    return this.pacientes;
  }
}
