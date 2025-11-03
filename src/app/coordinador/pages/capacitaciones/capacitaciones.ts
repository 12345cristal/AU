import { Component } from '@angular/core';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.html',
  styleUrls: ['./capacitaciones.scss']
})
export class CapacitacionesComponent {
  // Variables vacías para estructura base
  curso1: any = {};
  curso2: any = {};
  curso3: any = {};
  curso4: any = {};

  totalCursos = 0;
  completadas = 0;
  enProgreso = 0;
  participantes = 0;

  sesion1: any = {};
  sesion2: any = {};
}
