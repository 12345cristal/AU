import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Interfaz que define la estructura del nuevo usuario
 */
export interface NuevoUsuario {
  nombreCompleto: string;
  correoElectronico: string;
  rol: string;
  especialidad?: string; // Opcional
}

/**
 * Interfaz para las opciones de select (futuro dropdown)
 */
export interface RolUsuario {
    id: string;
    name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  /**
   * En el futuro, se usará HttpClient para enviar los datos al backend.
   */
  createNewUser(userData: NuevoUsuario): Observable<any> {
    console.log('Simulando creación de usuario:', userData);
    // Retorna un observable vacío (simulación de respuesta exitosa)
    return of({ success: true, message: 'Usuario creado (simulado)' });
  }

  /**
   * Obtiene la lista de roles disponibles del backend.
   */
  getAvailableRoles(): Observable<RolUsuario[]> {
    // Retorno de datos simulados
    return of([
        { id: 'terapeuta', name: 'Terapeuta' },
        { id: 'padre', name: 'Padre' },
        { id: 'administrador', name: 'Administrador' },
    ] as RolUsuario[]);
  }
}