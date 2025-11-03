import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

interface Usuario {
  id: number;
  iniciales: string;
  nombre: string;
  correo: string;
  rol: string;
  especialidad: string;
  telefono: string;
  ultimoAcceso: string;
  activo: boolean;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  // Base de datos simulada
  usuarios = signal<Usuario[]>([
    { id: 1, iniciales: 'AM', nombre: 'Ana Martínez', correo: 'ana.martinez@autismomochis.org', rol: 'Coordinador', especialidad: 'Administración', telefono: '668-123-4567', ultimoAcceso: '28 oct, 02:30 p.m.', activo: true },
    { id: 2, iniciales: 'CR', nombre: 'Dra. Carmen Ruiz', correo: 'carmen.ruiz@autismomochis.org', rol: 'Terapeuta', especialidad: 'Terapia de Lenguaje', telefono: '668-234-5678', ultimoAcceso: '28 oct, 01:45 p.m.', activo: true },
    { id: 3, iniciales: 'RS', nombre: 'Lic. Roberto Sánchez', correo: 'roberto.sanchez@autismomochis.org', rol: 'Terapeuta', especialidad: 'Psicología', telefono: '668-345-6789', ultimoAcceso: '28 oct, 12:20 p.m.', activo: true },
    { id: 4, iniciales: 'PF', nombre: 'Dra. Patricia Flores', correo: 'patricia.flores@autismomochis.org', rol: 'Terapeuta', especialidad: 'Psicopedagogía', telefono: '668-456-7890', ultimoAcceso: '28 oct, 11:30 a.m.', activo: true },
    { id: 5, iniciales: 'ML', nombre: 'Lic. Miguel Ángel López', correo: 'miguel.lopez@autismomochis.org', rol: 'Terapeuta', especialidad: 'Fisioterapia', telefono: '668-567-8901', ultimoAcceso: '28 oct, 10:15 a.m.', activo: true },
    { id: 6, iniciales: 'JM', nombre: 'Dr. José Morales', correo: 'jose.morales@autismomochis.org', rol: 'Terapeuta', especialidad: 'Terapia Neuromotora', telefono: '668-678-9012', ultimoAcceso: '28 oct, 09:45 a.m.', activo: true },
    { id: 7, iniciales: 'LG', nombre: 'Laura Gómez', correo: 'laura.gomez@autismomochis.org', rol: 'Recepción', especialidad: 'Administración', telefono: '668-789-0123', ultimoAcceso: '28 oct, 02:00 p.m.', activo: true },
    { id: 8, iniciales: 'CM', nombre: 'Carlos Mendoza', correo: 'carlos.mendoza@autismomochis.org', rol: 'Administrativo', especialidad: 'Contabilidad', telefono: '668-890-1234', ultimoAcceso: '20 oct, 04:30 p.m.', activo: false },
  ]);

  // Filtro de búsqueda y de estado
  filtro = new FormControl('');
  mostrarActivos = signal(true);

  // Usuarios filtrados
  usuariosFiltrados = computed(() => {
    const texto = this.filtro.value?.toLowerCase() ?? '';
    return this.usuarios().filter(u =>
      (this.mostrarActivos() ? u.activo : !u.activo) &&
      (u.nombre.toLowerCase().includes(texto) ||
       u.correo.toLowerCase().includes(texto) ||
       u.especialidad.toLowerCase().includes(texto))
    );
  });

  // Contadores por rol
  total = computed(() => this.usuarios().length);
  totalCoordinador = computed(() => this.usuarios().filter(u => u.rol === 'Coordinador').length);
  totalTerapeutas = computed(() => this.usuarios().filter(u => u.rol === 'Terapeuta').length);
  totalRecepcion = computed(() => this.usuarios().filter(u => u.rol === 'Recepción').length);
  totalAdministrativo = computed(() => this.usuarios().filter(u => u.rol === 'Administrativo').length);

  // Acciones
  toggleEstado(usuario: Usuario) {
    this.usuarios.update(lista =>
      lista.map(u => u.id === usuario.id ? { ...u, activo: !u.activo } : u)
    );
  }

  agregarUsuario() {
    const nuevo: Usuario = {
      id: Date.now(),
      iniciales: 'NU',
      nombre: 'Nuevo Usuario',
      correo: 'nuevo@autismomochis.org',
      rol: 'Terapeuta',
      especialidad: 'Sin asignar',
      telefono: '---',
      ultimoAcceso: '---',
      activo: true,
    };
    this.usuarios.update(lista => [...lista, nuevo]);
  }
}
