import { Component, OnInit } from '@angular/core';
import { PersonalMember, PersonalService, PersonalSummary} from '../../../service/personal.service';

@Component({
  selector: 'app-personal-dashboard',
  standalone: true,
  templateUrl: './personal.html',
  styleUrls: ['./personal.scss']
})
export class PersonalComponent implements OnInit {

  summaryData: PersonalSummary | null = null;
  personalList: PersonalMember[] = [];
  viewMode: 'tarjeta' | 'tabla' = 'tarjeta';
  searchText: string = '';

  constructor(private personalService: PersonalService) {}

  ngOnInit(): void {
    this.loadSummary();
    this.loadPersonalList();
  }

  loadSummary(): void {
    this.personalService.getPersonalSummary().subscribe(resumen => {
      this.summaryData = resumen;
      this.renderSummary();
    });
  }

  loadPersonalList(): void {
    this.personalService.getPersonalList().subscribe(lista => {
      this.personalList = lista;
      this.renderPersonalList();
    });
  }

  // ✅ Genera dinámicamente el contenido sin usar *ngFor ni *ngIf
  renderSummary(): void {
    const container = document.getElementById('summaryContainer');
    if (!container || !this.summaryData) return;

    container.innerHTML = `
      <div class="summary-card"><h3>Total Personal</h3><p>${this.summaryData.totalPersonal}</p></div>
      <div class="summary-card"><h3>Terapeutas</h3><p>${this.summaryData.terapeutas}</p></div>
      <div class="summary-card"><h3>Personal Activo</h3><p>${this.summaryData.personalActivo}</p></div>
      <div class="summary-card"><h3>Calificación Promedio</h3><p>${this.summaryData.calificacionPromedio}</p></div>
    `;
  }

  renderPersonalList(): void {
    const container = document.getElementById('listContainer');
    if (!container) return;

    const filtered = this.personalList.filter(p =>
      p.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.rol.toLowerCase().includes(this.searchText.toLowerCase())
    );

    container.innerHTML = filtered.map(p => `
      <div class="card">
        <div class="avatar">${p.iniciales}</div>
        <div class="info">
          <h4>${p.nombre}</h4>
          <p>${p.rol}</p>
          <p>📧 ${p.email}</p>
          <p>📞 ${p.telefono}</p>
          <p>⭐ ${p.calificacion}</p>
        </div>
      </div>
    `).join('');
  }

  updateSearch(input: HTMLInputElement): void {
    this.searchText = input.value;
    this.renderPersonalList();
  }

  switchView(mode: 'tarjeta' | 'tabla'): void {
    this.viewMode = mode;
  }
}
