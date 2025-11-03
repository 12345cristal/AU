import { Component } from '@angular/core';
import { AsistenteIAService } from '../../../service/asistente-ia.service';

@Component({
  selector: 'app-asistente-ia',
  templateUrl: './asistente-ia.html',
  styleUrls: ['./asistente-ia.scss']
})
export class AsistenteIAComponent {

  // Estado de los paneles
  panelGeneradorIA: boolean = false;
  panelAnalisisPredictivo: boolean = false;
  panelHistorial: boolean = false;

  // Datos de la configuración
  reportesGenerados: number;
  reportesMes: number;
  tiempoAhorrado: string;
  calidadPromedio: number;
  reportesMeses: number;
  actividad: string;
  porcentajeGeneracionIA: number;

  // Tipo de análisis seleccionado
  tipoAnalisis: string = '';

  // Información del panel Analisis Predictivo
  informacionPaciente: string = '';
  detallesClinicos: string = '';
  configuracionAvanzada: string = '';
  generacionIA: string = '';

  constructor(private service: AsistenteIAService) {
    // Inicializar datos desde el service
    const historial = this.service.getHistorial();
    this.reportesGenerados = historial.reportesGenerados;
    this.reportesMes = historial.reportesMes;
    this.tiempoAhorrado = historial.tiempoAhorrado;
    this.calidadPromedio = historial.calidadPromedio;
    this.reportesMeses = historial.reportesMeses;
    this.actividad = historial.actividad;

    const generador = this.service.getDatosGeneradorIA();
    this.porcentajeGeneracionIA = generador.porcentaje;
  }

  togglePanel(panel: string): void {
    if (panel === 'generador') this.panelGeneradorIA = !this.panelGeneradorIA;
    if (panel === 'analisis') this.panelAnalisisPredictivo = !this.panelAnalisisPredictivo;
    if (panel === 'historial') this.panelHistorial = !this.panelHistorial;
  }

  seleccionarAnalisis(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoAnalisis = selectElement.value;
    alert(`Seleccionó: ${this.tipoAnalisis}`);
  }
}
