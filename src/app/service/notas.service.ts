import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private notas: any[] = [];

  constructor() {}

  guardarNota(nota: { paciente: string; observaciones: string; fecha: Date }) {
    this.notas.push(nota);
    console.log('Nota guardada:', nota);
  }

  getNotas() {
    return this.notas;
  }
}
