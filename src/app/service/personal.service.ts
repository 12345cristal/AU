import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface PersonalMember {
  id_personal: number;
  nombre: string;
  email: string;
  telefono: string;
  rol: string;
  iniciales: string;
  calificacion: number;
}

export interface PersonalMember {
  id_personal: number;
  nombre: string;
  email: string;
  telefono: string;
  rol: string;
  iniciales: string;
  calificacion: number;
  foto?: string;  // 🔥 necesario para evitar errores
}


@Injectable({ providedIn: 'root' })
export class PersonalService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/personal`;

  getPersonalList(): Observable<PersonalMember[]> {
    return this.http.get<PersonalMember[]>(this.baseUrl + '/');
  }

  createPersonal(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl + '/', data);
  }

  getPersonalSummary(): Observable<PersonalSummary> {
    return this.http.get<PersonalSummary>(`${this.baseUrl}/resumen`);
  }
}
