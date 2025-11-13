// src/app/coordinador/pages/personal/formulario/personal-form.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonalService } from '../../../../service/personal.service';
import { RolesService } from '../../../../service/roles.service';
import { GradosAcademicosService } from '../../../../service/grados.service';

@Component({
  standalone: true,
  selector: 'app-personal-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.scss']
})
export class Formulario implements OnInit {

  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);

  personalService = inject(PersonalService);
  rolesService = inject(RolesService);
  gradosService = inject(GradosAcademicosService);

  idPersonal: number | null = null;
  modo: 'crear' | 'editar' = 'crear';

  tab = 'basico';

  roles: any[] = [];
  grados: any[] = [];

  // archivos
  fotoFile: File | null = null;
  cvFile: File | null = null;
  compFile: File | null = null;
  fotoPreview: string | null = null;

  form = this.fb.group({
    nombre: ['', Validators.required],
    apellido_paterno: [''],
    apellido_materno: [''],
    correo: ['', [Validators.required, Validators.email]],
    telefono: [''],
    id_rol: ['', Validators.required],
    contrasena: [''], // solo crear

    fecha_nacimiento: [''],
    fecha_ingreso: [''],
    id_grado: [''],
    especialidades: [''],

    telefono_personal: [''],
    correo_personal: [''],

    rfc: [''],
    ine: [''],
    curp: [''],

    domicilio_calle: [''],
    domicilio_colonia: [''],
    domicilio_cp: [''],
    domicilio_municipio: [''],
    domicilio_estado: [''],

    experiencia: [''],
  });

  ngOnInit() {
    this.rolesService.listar().subscribe((r: any) => this.roles = r);
    this.gradosService.listar().subscribe((g: any) => this.grados = g);

    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.route.snapshot.routeConfig?.path?.includes(':id/editar')) {
      this.idPersonal = Number(id);
      this.modo = 'editar';
      this.cargarDetalle();
    }
  }

  setTab(t: string) {
    this.tab = t;
  }

  cargarDetalle() {
    if (!this.idPersonal) return;
    this.personalService.obtener(this.idPersonal).subscribe((d: any) => {
      this.form.patchValue({
        nombre: d.nombre,
        apellido_paterno: d.apellido_paterno,
        apellido_materno: d.apellido_materno,
        correo: d.correo,
        telefono: d.telefono,
        id_rol: d.id_rol,

        fecha_nacimiento: d.fecha_nacimiento,
        fecha_ingreso: d.fecha_ingreso,
        id_grado: d.id_grado,
        especialidades: d.especialidades,

        telefono_personal: d.telefono_personal,
        correo_personal: d.correo_personal,

        rfc: d.rfc,
        ine: d.ine,
        curp: d.curp,

        domicilio_calle: d.domicilio_calle,
        domicilio_colonia: d.domicilio_colonia,
        domicilio_cp: d.domicilio_cp,
        domicilio_municipio: d.domicilio_municipio,
        domicilio_estado: d.domicilio_estado,

        experiencia: d.experiencia,
      });

      if (d.foto_perfil) {
        this.fotoPreview = d.foto_perfil;
      }
    });
  }

  onFileChange(event: Event, tipo: 'foto' | 'cv' | 'comp') {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];

    if (tipo === 'foto') {
      this.fotoFile = file;
      const reader = new FileReader();
      reader.onload = () => this.fotoPreview = reader.result as string;
      reader.readAsDataURL(file);
    } else if (tipo === 'cv') {
      this.cvFile = file;
    } else {
      this.compFile = file;
    }
  }

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const fd = new FormData();
    const valores = this.form.value;

    Object.entries(valores).forEach(([k, v]) => {
      if (v !== null && v !== undefined) {
        fd.append(k, v as any);
      }
    });

    if (this.fotoFile) fd.append('foto_perfil', this.fotoFile);
    if (this.cvFile) fd.append('cv_archivo', this.cvFile);
    if (this.compFile) fd.append('comprobante_domicilio', this.compFile);

    if (this.modo === 'crear') {
      if (!valores.contrasena) {
        alert('La contraseña es obligatoria para crear');
        return;
      }
      this.personalService.crear(fd).subscribe(() => {
        this.router.navigate(['/coordinador/personal']);
      });
    } else {
      // en editar, contrasena puede ir vacía (no se cambia en este endpoint)
      fd.delete('contrasena'); // para no intentar actualizar
      this.personalService.editar(this.idPersonal!, fd).subscribe(() => {
        this.router.navigate(['/coordinador/personal', this.idPersonal]);
      });
    }
  }
}
