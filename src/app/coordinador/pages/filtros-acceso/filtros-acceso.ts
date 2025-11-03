import { Component } from '@angular/core';
import { FiltroAccesoService } from '../../../service/filtro-acceso';

@Component({
  selector: 'app-filtro-acceso',
  templateUrl: './filtros-acceso.html',
  styleUrls: ['./filtros-acceso.scss']
})
export class FiltroAccesoComponent {

  roles = ['Coordinador', 'Terapeuta', 'Recepción', 'Administrativo'];
  selectedRole = 'Coordinador';
  permisos: any; // Declaras sin asignar

  constructor(private service: FiltroAccesoService) {
    // Inicializas aquí porque 'this.service' ya existe
    this.permisos = this.service.getPermisos();
  }

  cambiarRol(rol: string) {
    this.selectedRole = rol;
  }

  guardarCambios() {
    this.service.guardarPermisos(this.selectedRole, this.permisos[this.selectedRole]);
    alert('Permisos guardados correctamente');
  }

  togglePermiso(rol: string, permiso: string) {
    const rolPermisos = this.permisos[rol];
    rolPermisos[permiso] = !rolPermisos[permiso];
  }
}
