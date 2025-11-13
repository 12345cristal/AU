// src/app/coordinador/pages/personal/lista/personal-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PersonalService } from '../../../../service/personal.service';

@Component({
  standalone: true,
  selector: 'app-personal-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lista.html',
  styleUrls: ['./lista.scss']
})
export class Lista implements OnInit {

  constructor(private personalService: PersonalService, private router: Router) {}

  personal: any[] = [];
  filtrados: any[] = [];
  cargando = true;

  // Formulario reactivo para filtros
  filtrosForm = new FormGroup({
    busqueda: new FormControl(''),
    filtroRol: new FormControl('todos'),
    filtroActivo: new FormControl('todos')
  });

  // modal desactivación
  modalEstado = false;
  personaSeleccionada: any = null;

  ngOnInit() {
    this.cargar();
    this.filtrosForm.valueChanges.subscribe(() => this.aplicarFiltros());
  }

  cargar() {
    this.personalService.listar().subscribe((res: any) => {
      this.personal = res;
      this.aplicarFiltros();
      this.cargando = false;
    });
  }

  aplicarFiltros() {
    const { busqueda = '', filtroRol = 'todos', filtroActivo = 'todos' } = this.filtrosForm.value;
    this.filtrados = this.personal.filter(p => {
      const searchTerm = (busqueda ?? '').toString().toLowerCase();
      const matchTexto =
        searchTerm === '' ||
        p.nombre.toLowerCase().includes(searchTerm) ||
        p.email.toLowerCase().includes(searchTerm);

      const matchRol =
        filtroRol === 'todos' || p.rol === filtroRol;

      const matchActivo =
        filtroActivo === 'todos' ||
        (filtroActivo === 'activos' && p.activo) ||
        (filtroActivo === 'inactivos' && !p.activo);

      return matchTexto && matchRol && matchActivo;
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/coordinador/personal', id]);
  }

  irNuevo() {
    this.router.navigate(['/coordinador/personal/nuevo']);
  }

  abrirModalEstado(p: any) {
    this.personaSeleccionada = p;
    this.modalEstado = true;
  }

  cerrarModalEstado() {
    this.modalEstado = false;
    this.personaSeleccionada = null;
  }

  confirmarCambioEstado() {
    if (!this.personaSeleccionada) return;
    this.personalService
      .cambiarEstado(this.personaSeleccionada.id_personal, !this.personaSeleccionada.activo)
      .subscribe(() => {
        this.cargar();
        this.cerrarModalEstado();
      });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar registro definitivamente?')) return;
    this.personalService.eliminar(id).subscribe(() => this.cargar());
  }

  // Export sencillo a CSV (Excel lo abre sin problema)
  exportarCSV() {
    const encabezados = [
      'Nombre', 'Email', 'Rol', 'Grado', 'Teléfono', 'Activo'
    ];
    const filas = this.filtrados.map(p => [
      p.nombre,
      p.email,
      p.rol,
      p.grado_academico ?? '',
      p.telefono ?? '',
      p.activo ? 'Activo' : 'Inactivo'
    ]);

    const contenido = [encabezados, ...filas]
      .map(f => f.map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

    const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'personal_autismo_mochis.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  // "Export PDF" simple usando impresión del navegador
  exportarPDF() {
    window.print();
  }
}
