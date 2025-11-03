import { Component } from '@angular/core';

interface Mensaje {
  id: number;
  prioridad: string;
  titulo: string;
  destinatario: string;
  contenido: string;
  enviado: string;
  visto?: string;
  completado?: string;
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.html',
  styleUrls: ['./mensajes.scss']
})
export class MensajesComponent {

  // Mensajes individuales
  mensaje1: Mensaje = {
    id: 1,
    prioridad: 'Normal',
    titulo: 'Recordatorio: Próxima sesión de terapia',
    destinatario: 'Sra. Ana López',
    contenido: 'María tiene sesión de Terapia de Lenguaje este martes 29 de octubre a las 10:00 AM.',
    enviado: '2025-10-26T14:30',
    visto: '2025-10-26T15:45',
    completado: '2025-10-26T16:00'
  };

  mensaje2: Mensaje = {
    id: 2,
    prioridad: 'Alta',
    titulo: 'Reporte cuatrimestral disponible',
    destinatario: 'Sr. Carlos Pérez',
    contenido: 'El reporte cuatrimestral de Juan ya está disponible.',
    enviado: '2025-10-27T10:15',
    visto: '2025-10-27T16:20'
  };

  mensaje3: Mensaje = {
    id: 3,
    prioridad: 'Urgente',
    titulo: 'Cambio de horario de terapia',
    destinatario: 'Sra. Karla Morales',
    contenido: 'La terapia de su hijo fue reprogramada al miércoles a las 9:00 AM.',
    enviado: '2025-10-28T09:45'
  };

  mensaje4: Mensaje = {
    id: 4,
    prioridad: 'Normal',
    titulo: 'Actualización de expediente clínico',
    destinatario: 'Sr. Luis Herrera',
    contenido: 'El expediente clínico de Camila ha sido actualizado correctamente.',
    enviado: '2025-10-29T11:00',
    visto: '2025-10-29T12:10'
  };

  enviarNuevoMensaje(asunto: string, destinatario: string, prioridad: string, contenido: string): void {
    if (!asunto || !destinatario || !contenido) {
      alert('Por favor complete todos los campos antes de enviar.');
      return;
    }
    console.log('Nuevo mensaje enviado:', { asunto, destinatario, prioridad, contenido });
    alert('Mensaje enviado correctamente');
  }
}
