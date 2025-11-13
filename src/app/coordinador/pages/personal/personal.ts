import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalService, PersonalMember } from '../../../service/personal.service';
import { RolesService, Rol } from '../../../service/roles.service';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.scss'],
})
export class PersonalComponent implements OnInit {

  personales = signal<PersonalMember[]>([]);
  roles = signal<Rol[]>([]);
  viewMode = signal<'tarjeta' | 'tabla'>('tarjeta');
  searchText = signal('');
  sheetOpen = signal(false);

  personalForm!: FormGroup;
  cvFile: File | null = null;
  fotoFile: File | null = null;

  filtered = computed(() => {
    const q = this.searchText().toLowerCase().trim();
    return q
      ? this.personales().filter((p) =>
          [p.nombre, p.email, p.telefono, p.rol].some((x) =>
            (x || '').toLowerCase().includes(q)
          )
        )
      : this.personales();
  });

  constructor(
    private fb: FormBuilder,
    private personalService: PersonalService,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.initForm();
    this.cargarPersonal();
    this.cargarRoles();
  }

  private initForm() {
    this.personalForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido_paterno: [''],
      apellido_materno: [''],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''],
      id_rol: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],

      fecha_nacimiento: [''],
      grado_academico: [''],
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
  }

  cargarPersonal() {
    this.personalService.getPersonalList().subscribe({
      next: (data) => this.personales.set(data),
      error: (err) => console.error('❌ Error al cargar personal:', err),
    });
  }

  cargarRoles() {
    this.rolesService.getRoles().subscribe({
      next: (data) => this.roles.set(data),
      error: (err) => console.error('❌ Error al cargar roles:', err),
    });
  }

  // 🔥 METODO QUE FALTABA Y ROMPIÓ TODO
  switchView(mode: 'tarjeta' | 'tabla') {
    this.viewMode.set(mode);
  }

  toggleSheet(open?: boolean) {
    this.sheetOpen.set(open ?? !this.sheetOpen());
  }

  onFileChange(event: Event, type: 'cv' | 'foto') {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (type === 'cv') this.cvFile = file;
    if (type === 'foto') this.fotoFile = file;
  }

  guardarPersonal() {
    if (this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.entries(this.personalForm.value).forEach(([key, value]) => {
      formData.append(key, value ?? '');
    });

    if (this.cvFile) formData.append('cv_archivo', this.cvFile);
    if (this.fotoFile) formData.append('foto_perfil', this.fotoFile);

    this.personalService.createPersonal(formData).subscribe({
      next: () => {
        alert('✅ Personal registrado correctamente');
        this.cargarPersonal();
        this.personalForm.reset();
        this.cvFile = null;
        this.fotoFile = null;
        this.toggleSheet(false);
      },
      error: (err) => {
        console.error('❌ Error al crear personal:', err);
        alert(err?.error?.detail || 'Error del servidor');
      },
    });
  }

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText.set(input.value);
  }
}
