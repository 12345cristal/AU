import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../../../../service/personal.service';

@Component({
  selector: 'app-detalle-personal',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.scss'],
})
export class Detalle implements OnInit {

  constructor(private route: ActivatedRoute, private personalService: PersonalService) {}

  id = 0;
  data: any = null;
  tab = 'general';

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargar();
  }

  cargar() {
    this.personalService.obtener(this.id).subscribe((res) => this.data = res);
  }

  cambiarTab(t: string) {
    this.tab = t;
  }
}
