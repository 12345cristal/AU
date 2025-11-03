import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenteIAService {

  constructor() {}

  getDatosGeneradorIA() {
    return {
      porcentaje: 20,
      tiposAnalisis: [
        "Reporte Cuatrimestral",
        "Análisis de Progreso",
        "Recomendaciones Terapéuticas",
        "Mejorar Redacción",
        "Plan de Intervención",
        "Informe para Familia",
        "Evaluación Inicial",
        "Resumen Ejecutivo"
      ]
    };
  }

  getHistorial() {
    return {
      reportesGenerados: 124,
      reportesMes: 12,
      tiempoAhorrado: '48h ≈ 2 días completos',
      calidadPromedio: 4.7,
      reportesMeses: 18,
      actividad: 'Muy activo'
    };
  }
}
