// src/app/coordinador/services/personal.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class PersonalService {
  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/personal`;
  private usuariosApi = `${environment.apiUrl}/usuarios`;

  listar() {
    return this.http.get(this.api);
  }

  obtener(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  crear(fd: FormData) {
    return this.http.post(this.api, fd);
  }

  editar(id: number, fd: FormData) {
    return this.http.put(`${this.api}/${id}`, fd);
  }

  cambiarEstado(id: number, activo: boolean) {
    return this.http.patch(`${this.api}/${id}/activo`, { activo });
  }

  eliminar(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  cambiarPassword(idUsuario: number, nueva: string) {
    return this.http.patch(`${this.usuariosApi}/${idUsuario}/password`, {
      nueva_contrasena: nueva
    });
  }
}
