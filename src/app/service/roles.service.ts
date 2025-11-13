// src/app/coordinador/services/roles.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class RolesService {
  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/roles`;

  listar() {
    return this.http.get(this.api);
  }
}
