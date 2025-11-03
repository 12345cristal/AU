import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from "../../shared/footer/footer";
import { HeaderComponent } from "../../shared/header/header";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, HeaderComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  loginForm: FormGroup;
  mostrarPassword: boolean = false;
  mensajeError: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  enviar() {
    if (this.loginForm.valid) {
      // Aquí puedes poner la lógica de login
      console.log('Usuario:', this.loginForm.value.usuario);
      console.log('Contraseña:', this.loginForm.value.contraseña);
      this.mensajeError = '';
    } else {
      this.mensajeError = 'Por favor llena todos los campos correctamente.';
    }
  }
}
