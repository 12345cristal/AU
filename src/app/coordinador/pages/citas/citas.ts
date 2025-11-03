import { Component, OnInit } from '@angular/core';

interface Cita {
  hora: string;
  duracion: number;
  paciente: string;
  tipoTerapia: string;
  terapeuta: string;
  estado: 'Completada' | 'En Proceso' | 'Pendiente';
}

@Component({
  selector: 'app-citas',
  templateUrl: './citas.html',
  styleUrls: ['./citas.scss']
})
export class CitasComponent implements OnInit {

  citasHoy: Cita[] = [];
  total = 0;
  completadas = 0;
  enProceso = 0;
  pendientes = 0;

  constructor() { }

  ngOnInit(): void {
    this.citasHoy = [
      { hora: '09:00', duracion: 60, paciente: 'María González López', tipoTerapia: 'Terapia de Lenguaje', terapeuta: 'Dra. Carmen Ruiz', estado: 'Completada' },
      { hora: '10:00', duracion: 45, paciente: 'Juan Pérez Martínez', tipoTerapia: 'Psicología', terapeuta: 'Lic. Roberto Sánchez', estado: 'Completada' },
      { hora: '11:00', duracion: 60, paciente: 'Ana Rodríguez Cruz', tipoTerapia: 'Psicopedagogía', terapeuta: 'Dra. Patricia Flores', estado: 'En Proceso' },
      { hora: '13:00', duracion: 45, paciente: 'Carlos Ramírez Torres', tipoTerapia: 'Fisioterapia', terapeuta: 'Lic. Miguel Ángel López', estado: 'Pendiente' },
      { hora: '14:00', duracion: 60, paciente: 'Laura Hernández Gómez', tipoTerapia: 'Terapia Neuromotora', terapeuta: 'Dr. José Luis Morales', estado: 'Pendiente' }
    ];

    this.calcularResumen();
  }

  calcularResumen() {
    this.total = this.citasHoy.length;
    this.completadas = this.citasHoy.filter(c => c.estado === 'Completada').length;
    this.enProceso = this.citasHoy.filter(c => c.estado === 'En Proceso').length;
    this.pendientes = this.citasHoy.filter(c => c.estado === 'Pendiente').length;
  }

  estadoColor(estado: string): string {
    switch (estado) {
      case 'Completada': return '#16a34a';
      case 'En Proceso': return '#f59e0b';
      case 'Pendiente': return '#2563eb';
      default: return '#555';
    }
  }

  generarHTML(): string {
    let html = '';
    this.citasHoy.forEach(c => {
      html += `
      <div class="cita-card">
        <div class="cita-hora">${c.hora}</div>
        <div class="cita-detalles">
          <p><strong>${c.paciente}</strong></p>
          <p>${c.tipoTerapia}</p>
          <p>Terapeuta: ${c.terapeuta}</p>
          <div class="estado" style="color: ${this.estadoColor(c.estado)}">${c.estado}</div>
          <div class="acciones">
            <button>Ver Paciente</button>
            <button>Recordatorio</button>
            <button>WhatsApp</button>
          </div>
        </div>
      </div>
      `;
    });
    return html;
  }
}
