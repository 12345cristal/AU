import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /** 🌐 URL base de tu backend FastAPI */
  private apiUrl = 'http://127.0.0.1:9000/auth';
  private tokenKey = 'access_token';
  private userKey = 'usuario';

  constructor(private http: HttpClient) {}

  /**
   * 🔐 Inicia sesión enviando JSON en el cuerpo
   * El backend espera un objeto con { correo, contrasena }
   */
  login(correo: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { correo, contrasena };

    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap((response) => {
        if (response?.access_token) {
          localStorage.setItem(this.tokenKey, response.access_token);
          localStorage.setItem(this.userKey, JSON.stringify(response.usuario));
        }
      })
    );
  }

  /** 🚪 Cierra sesión completamente */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  /** 📦 Obtiene el token JWT guardado */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /** 👤 Obtiene los datos del usuario logueado */
  getUsuario(): any | null {
    const usuario = localStorage.getItem(this.userKey);
    return usuario ? JSON.parse(usuario) : null;
  }

  /** 🧠 Verifica si el usuario está autenticado */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
