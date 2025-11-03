import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../../service/pacientes.services';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.scss']
})
export class PacientesComponent implements OnInit {

  paciente1: any;
  paciente2: any;
  paciente3: any;
  paciente4: any;

  searchQuery: string = '';

  constructor(private service: PacientesService) {}

  ngOnInit() {
    const pacientes = this.service.getPacientes();
    this.paciente1 = pacientes[0];
    this.paciente2 = pacientes[1];
    this.paciente3 = pacientes[2];
    this.paciente4 = pacientes[3];
  }

  verDetalles(paciente: any) {
    alert(`Detalles de ${paciente.nombre}\nEdad: ${paciente.edad}\nDiagnóstico: ${paciente.diagnostico}`);
  }

  // Devuelve el texto a mostrar para cada paciente según búsqueda
  mostrarNombre(paciente: any): string {
    if (!this.searchQuery) return paciente.nombre;
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ? paciente.nombre : '---';
  }

  mostrarEdad(paciente: any): string {
    if (!this.searchQuery) return paciente.edad;
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ? paciente.edad : '---';
  }

  mostrarDiagnostico(paciente: any): string {
    if (!this.searchQuery) return paciente.diagnostico;
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ? paciente.diagnostico : '---';
  }

  mostrarServicios(paciente: any): string {
    if (!this.searchQuery) return paciente.servicios.join(', ');
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ? paciente.servicios.join(', ') : '---';
  }

  mostrarEstado(paciente: any): string {
    if (!this.searchQuery) return paciente.estado;
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ? paciente.estado : '---';
  }

  botonAccion(paciente: any): boolean {
    if (!this.searchQuery) return true;
    return paciente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
  }
}
