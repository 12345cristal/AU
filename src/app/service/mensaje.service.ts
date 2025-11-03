import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Mensaje {
  id: number;
  prioridad: string;
  titulo: string;
  destinatario: string;
  contenido: string;
  enviado: string;
  visto?: string;
  completado?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensajes: Mensaje[] = [
    {
      id: 1,
      prioridad: 'Normal',
      titulo: 'Recordatorio: Próxima sesión de terapia',
      destinatario: 'Sra. Ana López',
      contenido: 'María tiene sesión de Terapia de Lenguaje este martes 29 de octubre a las 10:00 AM.',
      enviado: '2025-10-26T14:30',
      visto: '2025-10-26T15:45',
      completado: '2025-10-26T16:00'
    },
    {
      id: 2,
      prioridad: 'Alta',
      titulo: 'Reporte cuatrimestral disponible',
      destinatario: 'Sr. Carlos Pérez',
      contenido: 'El reporte cuatrimestral de Juan ya está disponible.',
      enviado: '2025-10-27T10:15',
      visto: '2025-10-27T16:20'
    }
  ];

  constructor() {}

  getMensajes(): Observable<Mensaje[]> {
    return of(this.mensajes);
  }

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    mensaje.id = this.mensajes.length + 1;
    this.mensajes.push(mensaje);
    return of(mensaje);
  }
}
