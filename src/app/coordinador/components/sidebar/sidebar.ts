import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar-coordinador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menuVisible = false;
  @Output() menuVisibleChange = new EventEmitter<boolean>();

  /** ⭐ Solo una sección abierta a la vez */
  sections: Record<string, boolean> = {
    panel: false,
    clinica: false,
    parte: false,
    soporte: false,
    admin: false
  };

  /** Estado */
  isOpen(key: string): boolean {
    return this.sections[key];
  }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  /** ⭐ NUEVA LÓGICA — SOLO UNA SECCIÓN ABIERTA */
  toggleSection(key: string) {
    const isCurrentlyOpen = this.sections[key];

    // Cerrar TODAS
    Object.keys(this.sections).forEach(k => this.sections[k] = false);

    // Si la que tocaste estaba cerrada → abrirla
    this.sections[key] = !isCurrentlyOpen;
  }

  toggleSidebar() {
    this.menuVisible = !this.menuVisible;
    this.menuVisibleChange.emit(this.menuVisible);
  }

  openSidebar() {
    this.menuVisible = true;
    this.menuVisibleChange.emit(this.menuVisible);
  }

  closeSidebar() {
    this.menuVisible = false;
    this.menuVisibleChange.emit(this.menuVisible);
  }

  @HostListener('document:keydown', ['$event'])
  onEscape(event: Event) {
    const ev = event as KeyboardEvent;
    if (ev.key === 'Escape' && this.menuVisible) {
      this.closeSidebar();
      ev.stopPropagation();
    }
  }
}
