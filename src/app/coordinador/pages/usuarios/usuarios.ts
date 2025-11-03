import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario, UsuariosService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  searchQuery: string = '';
  mostrarActivos: boolean = true;
  cargando: boolean = false;

  constructor(private usuariosService: UsuariosService) {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuariosService.getUsuarios().subscribe({
      next: data => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: err => {
        console.error('Error al cargar usuarios', err);
        this.cargando = false;
      }
    });
  }

  toggleActivo(usuario: Usuario) {
    this.usuariosService.toggleActivo(usuario.id, !usuario.activo).subscribe({
      next: () => usuario.activo = !usuario.activo,
      error: err => console.error('Error al actualizar estado', err)
    });
  }

  get filteredUsuarios() {
    return this.usuarios
      .filter(u => this.mostrarActivos ? u.activo : !u.activo)
      .filter(u =>
        u.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (u.especialidad?.toLowerCase().includes(this.searchQuery.toLowerCase()) ?? false)
      );
  }

  agregarUsuario() {
    console.log('Abrir formulario de nuevo usuario');
  }

  verEquipoCompleto() {
    console.log('Mostrar lista completa de usuarios');
  }
}
