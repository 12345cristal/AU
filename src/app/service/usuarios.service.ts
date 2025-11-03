import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id: number;
  iniciales: string;
  nombre: string;
  email: string;
  rol: string;
  especialidad?: string;
  contacto: string;
  ultimoAcceso: string;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl = 'http://localhost:8000'; // tu backend FastAPI

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  toggleActivo(id: number, estado: boolean): Observable<any> {
    return this.http.patch(`${this.baseUrl}/usuarios/${id}/estado`, { activo: estado });
  }
}
