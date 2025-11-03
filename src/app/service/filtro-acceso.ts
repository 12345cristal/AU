import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroAccesoService {

  // Permisos iniciales
  permisos: any = {
    Coordinador: {
      dashboard: true,
      verCitas: true,
      editarCitas: true,
      verRecursos: true,
      crearRecursos: true,
      verMensajes: true,
      enviarMensajes: true,
      verReportes: true,
      editarReportes: true,
      verHorarios: true,
      editarHorarios: true,
      verCapacitaciones: true,
      gestionarCapacitaciones: true,
      verExpedientes: true,
      editarExpedientes: true,
      crearBeneficiarios: true,
      verUsuarios: true,
      gestionarUsuarios: true
    },
    Terapeuta: {
      dashboard: false,
      verCitas: true,
      editarCitas: false,
      verRecursos: false,
      crearRecursos: false,
      verMensajes: true,
      enviarMensajes: true,
      verReportes: true,
      editarReportes: false,
      verHorarios: false,
      editarHorarios: false,
      verCapacitaciones: false,
      gestionarCapacitaciones: false,
      verExpedientes: true,
      editarExpedientes: false,
      crearBeneficiarios: false,
      verUsuarios: false,
      gestionarUsuarios: false
    },
    Recepción: {
      dashboard: false,
      verCitas: true,
      editarCitas: true,
      verRecursos: false,
      crearRecursos: false,
      verMensajes: false,
      enviarMensajes: false,
      verReportes: false,
      editarReportes: false,
      verHorarios: true,
      editarHorarios: false,
      verCapacitaciones: false,
      gestionarCapacitaciones: false,
      verExpedientes: false,
      editarExpedientes: false,
      crearBeneficiarios: false,
      verUsuarios: false,
      gestionarUsuarios: false
    },
    Administrativo: {
      dashboard: false,
      verCitas: false,
      editarCitas: false,
      verRecursos: false,
      crearRecursos: false,
      verMensajes: false,
      enviarMensajes: false,
      verReportes: true,
      editarReportes: false,
      verHorarios: false,
      editarHorarios: false,
      verCapacitaciones: false,
      gestionarCapacitaciones: false,
      verExpedientes: true,
      editarExpedientes: true,
      crearBeneficiarios: false,
      verUsuarios: false,
      gestionarUsuarios: false
    }
  };

  constructor() {}

  getPermisos() {
    return this.permisos;
  }

  guardarPermisos(rol: string, permisosRol: any) {
    this.permisos[rol] = permisosRol;
    console.log('Permisos guardados para', rol, permisosRol);
    // Aquí puedes llamar a FastAPI para guardar en la DB
  }
}
