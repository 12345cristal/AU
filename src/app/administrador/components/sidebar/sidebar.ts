import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  // Control de visibilidad general del sidebar
  @HostBinding('class.open') isOpen = false;

  // Estados de secciones internas
  panelGeneralOpen = true;
  comunicacionOpen = false;
  finanzasOpen = false;
  usuariosOpen = false;

  // Métodos de control del sidebar
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }
}
