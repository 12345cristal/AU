import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../../../service/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.html',
  styleUrls: ['./planes.scss']
})
export class PlanesComponent implements OnInit {

  // Planes individuales
  plan1: any;
  plan2: any;
  plan3: any;
  plan4: any;

  constructor(private service: PlanesService) {}

  ngOnInit() {
    const planes = this.service.getPlanes();
    this.plan1 = planes[0];
    this.plan2 = planes[1];
    this.plan3 = planes[2];
    this.plan4 = planes[3];
  }

  verPlan(plan: any) {
    alert(`Plan completo de ${plan.nombre}\nDiagnóstico: ${plan.diagnostico}\nServicios: ${plan.servicios.join(', ')}`);
  }
}
