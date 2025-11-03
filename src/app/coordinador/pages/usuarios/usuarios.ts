import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NuevoUsuario, RolUsuario, UsuarioService } from '../../../service/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 necesarios para *ngIf, *ngFor, formGroup, etc.
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosComponent implements OnInit {

  userForm: FormGroup;
  roles: RolUsuario[] = [];
  isLoading: boolean = false;
  
  // ✅ Propiedad que determina si se muestra "Especialidad"
  get isSpecialityRequired(): boolean {
      const role = this.userForm.get('rol')?.value;
      return role === 'terapeuta'; 
  }

  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService
  ) {
    // Inicializa el formulario
    this.userForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      especialidad: ['']
    });
  }

  ngOnInit(): void {
    this.loadRoles();
    this.setupFormListeners();
  }
  
  // ✅ Carga de roles simulada (en el futuro será desde backend)
  loadRoles(): void {
    this.userService.getAvailableRoles().subscribe(data => {
      this.roles = data;
    });
  }

  // ✅ Listener para mostrar/ocultar el campo de especialidad dinámicamente
  setupFormListeners(): void {
    this.userForm.get('rol')?.valueChanges.subscribe(rol => {
      const specialityControl = this.userForm.get('especialidad');
      if (rol === 'terapeuta') {
        specialityControl?.setValidators(Validators.required);
      } else {
        specialityControl?.clearValidators();
      }
      specialityControl?.updateValueAndValidity();
    });
  }

  // ✅ Envía los datos simulando una petición HTTP
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      console.error('Formulario inválido. Revise los campos.');
      return;
    }

    this.isLoading = true;
    const userData: NuevoUsuario = this.userForm.value;

    this.userService.createNewUser(userData).subscribe({
      next: (response) => {
        console.log('Usuario creado correctamente:', response);
        this.isLoading = false;
        this.userForm.reset();
        alert('✅ Usuario creado con éxito (simulado)');
      },
      error: (err) => {
        console.error('Error simulado:', err);
        this.isLoading = false;
        alert('❌ Error al crear usuario');
      }
    });
  }
}
