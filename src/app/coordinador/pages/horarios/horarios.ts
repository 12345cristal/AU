import { Component, OnInit } from '@angular/core';
import { HorariosService, Slot, Dia, Evento } from '../../../service/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.html',
  styleUrls: ['./horarios.scss']
})
export class HorariosComponent implements OnInit {

  horarios: Slot[] = [];
  totalRegulares = 0;
  totalReposiciones = 0;
  totalCapacitaciones = 0;

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.loadHorarios();
  }

  loadHorarios(): void {
    this.horariosService.getHorarios().subscribe((data: Slot[]) => {
      this.horarios = data;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    let reg = 0, rep = 0, cap = 0;

    this.horarios.forEach((slot: Slot) => {
      slot.dias.forEach((dia: Dia) => {
        dia.eventos.forEach((evento: Evento) => {
          if (evento.tipo === 'regular') reg++;
          else if (evento.tipo === 'reposicion') rep++;
          else if (evento.tipo === 'capacitacion') cap++;
        });
      });
    });

    this.totalRegulares = reg;
    this.totalReposiciones = rep;
    this.totalCapacitaciones = cap;
  }
}
