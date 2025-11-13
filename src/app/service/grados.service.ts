// src/app/coordinador/services/grados-academicos.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class GradosAcademicosService {
  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/grados-academicos`;

  listar() {
    return this.http.get(this.api);
  }
}
