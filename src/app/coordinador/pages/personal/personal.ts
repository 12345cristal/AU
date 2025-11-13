import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { PersonalService } from '../../../service/personal.service';
import { RolesService } from '../../../service/roles.service';
import { GradosAcademicosService } from '../../../service/grados.service';

@Component({
  selector: 'app-personal-coordindor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.scss']
})
export class PersonalComponent implements OnInit {

  fb = inject(FormBuilder);
  personalService = inject(PersonalService);
  rolesService = inject(RolesService);
  gradosService = inject(GradosAcademicosService);

  personal: any[] = [];
  roles: any[] = [];
  grados: any[] = [];

  modal = false;
  modo = 'crear'; // crear | editar
  editId: number | null = null;

  form = this.fb.group({
    nombre: ['', Validators.required],
    apellido_paterno: [''],
    apellido_materno: [''],
    correo: ['', Validators.required],
    telefono: [''],
    id_rol: ['', Validators.required],
    contrasena: [''], // solo crear
    id_grado: [''],
    especialidades: ['']
  });

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.personalService.listar().subscribe((res: any) => this.personal = res);
    this.rolesService.listar().subscribe((res: any) => this.roles = res);
    this.gradosService.listar().subscribe((res: any) => this.grados = res);
  }

  abrirCrear() {
    this.modo = 'crear';
    this.editId = null;
    this.form.reset();
    this.modal = true;
  }

  abrirEditar(p: any) {
    this.modo = 'editar';
    this.editId = p.id_personal;
    this.modal = true;

    this.personalService.obtener(p.id_personal).subscribe((det: any) => {
      this.form.patchValue({
        nombre: det.nombre,
        apellido_paterno: det.apellido_paterno,
        apellido_materno: det.apellido_materno,
        correo: det.correo,
        telefono: det.telefono,
        id_rol: det.id_rol,
        id_grado: det.id_grado,
        especialidades: det.especialidades
      });
    });
  }

  cerrar() {
    this.modal = false;
  }

  guardar() {
    const fd = new FormData();
    Object.entries(this.form.value).forEach(([k, v]) => fd.append(k, v ?? ''));

    if (this.modo === 'crear') {
      this.personalService.crear(fd).subscribe(() => {
        this.cerrar();
        this.loadData();
      });
    } else {
      this.personalService.editar(this.editId!, fd).subscribe(() => {
        this.cerrar();
        this.loadData();
      });
    }
  }

  eliminar(id: number) {
    if (!confirm("Eliminar registro?")) return;
    this.personalService.eliminar(id).subscribe(() => this.loadData());
  }

  cambiarEstado(p: any) {
    this.personalService.cambiarEstado(p.id_personal, !p.activo)
      .subscribe(() => this.loadData());
  }
}
