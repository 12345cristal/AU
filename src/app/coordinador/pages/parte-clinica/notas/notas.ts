import { Component } from '@angular/core';
import { NotasService } from '../../../../service/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.html',
  styleUrls: ['./notas.scss']
})
export class NotasComponent {

  // Pacientes individuales
  paciente1: string = 'María González López';
  paciente2: string = 'Juan Pérez Martínez';
  paciente3: string = 'Ana Rodríguez Cruz';
  paciente4: string = 'Carlos Ramírez Torres';

  // Selección de paciente
  pacienteSeleccionado: string = '';

  // Observaciones
  observaciones: string = '';

  constructor(private service: NotasService) {}

  guardarNota() {
    if (!this.pacienteSeleccionado || !this.observaciones) {
      alert('Por favor seleccione un paciente y escriba las observaciones.');
      return;
    }

    this.service.guardarNota({
      paciente: this.pacienteSeleccionado,
      observaciones: this.observaciones,
      fecha: new Date()
    });

    alert('Nota guardada correctamente');
    this.pacienteSeleccionado = '';
    this.observaciones = '';
  }

  cancelar() {
    this.pacienteSeleccionado = '';
    this.observaciones = '';
  }

  // Métodos para actualizar valores sin ngModel
  actualizarPaciente(event: any) {
    this.pacienteSeleccionado = event.target.value;
  }

  actualizarObservaciones(event: any) {
    this.observaciones = event.target.value;
  }
}
