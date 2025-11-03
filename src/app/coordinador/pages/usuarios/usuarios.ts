import { Component, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id: number;
  iniciales: string;
  nombre: string;
  rol: string;
  especialidad?: string;
  contacto: string;
  ultimoAcceso: string;
  activo: boolean;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosComponent {
  usuarios = signal<Usuario[]>([]);
  searchQuery = signal('');
  mostrarActivos = signal(true);
  cargando = signal(false);

  // Modal y usuario seleccionado
  mostrarModalEditar = signal(false);
  mostrarModalPermisos = signal(false);
  mostrarModalNuevo = signal(false);
  usuarioSeleccionado = signal<Usuario>({ 
    id: 0, iniciales: '', nombre: '', rol: '', contacto: '', ultimoAcceso: '', activo: true 
  });

  // Computed para filtrar usuarios
  filteredUsuarios = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.usuarios().filter(u =>
      u.activo === this.mostrarActivos() &&
      (u.nombre.toLowerCase().includes(query) ||
       u.contacto.includes(query) ||
       (u.especialidad && u.especialidad.toLowerCase().includes(query)))
    );
  });

  constructor(private http: HttpClient) {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando.set(true);
    this.http.get<Usuario[]>('http://localhost:8000/usuarios').subscribe({
      next: data => {
        this.usuarios.set(data);
        this.cargando.set(false);
      },
      error: err => {
        console.error(err);
        this.cargando.set(false);
      }
    });
  }

  toggleActivo(u: Usuario) {
    const nuevoEstado = !u.activo;
    this.http.patch(`http://localhost:8000/usuarios/${u.id}/activar`, { activo: nuevoEstado })
      .subscribe(() => {
        const updated = this.usuarios().map(x => x.id === u.id ? { ...x, activo: nuevoEstado } : x);
        this.usuarios.set(updated);
      });
  }

  editarUsuario(u: Usuario) {
    this.usuarioSeleccionado.set({ ...u });
    this.mostrarModalEditar.set(true);
  }

  guardarEdicion() {
    const u = this.usuarioSeleccionado();
    this.http.put(`http://localhost:8000/usuarios/${u.id}`, u).subscribe(() => {
      const updated = this.usuarios().map(x => x.id === u.id ? u : x);
      this.usuarios.set(updated);
      this.mostrarModalEditar.set(false);
    });
  }

  permisosUsuario(u: Usuario) {
    this.usuarioSeleccionado.set({ ...u });
    this.mostrarModalPermisos.set(true);
  }

  agregarUsuario() {
    this.usuarioSeleccionado.set({ id: 0, iniciales: '', nombre: '', rol: '', contacto: '', ultimoAcceso: '', activo: true });
    this.mostrarModalNuevo.set(true);
  }

  guardarNuevoUsuario() {
    const u = this.usuarioSeleccionado();
    this.http.post<Usuario>('http://localhost:8000/usuarios', u).subscribe(usuario => {
      this.usuarios.set([...this.usuarios(), usuario]);
      this.mostrarModalNuevo.set(false);
    });
  }

  actualizarBusqueda(value: string) {
    this.searchQuery.set(value);
  }

  cambiarFiltro(activos: boolean) {
    this.mostrarActivos.set(activos);
  }
}
