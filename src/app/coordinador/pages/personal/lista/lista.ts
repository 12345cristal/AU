import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalService } from '../../../../service/personal.service';
@Component({
  selector: 'app-lista-personal',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.scss',
})
export class Lista {

  constructor(private personalService: PersonalService, private router: Router) {}

  personal: any[] = [];
  cargando = true;

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.personalService.listar().subscribe((res: any) => {
      this.personal = res;
      this.cargando = false;
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/coordinador/personal', id]);
  }
}
