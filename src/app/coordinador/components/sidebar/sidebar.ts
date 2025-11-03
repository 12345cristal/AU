import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  menuVisible = window.innerWidth > 1024;
  panelPrincipalOpen = false;
  gestionClinicaOpen = false;
  administracionOpen = false;

  // Control de apertura del submenú Parte clínica
  parteClinicaOpen = false;

  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar() {
    this.menuVisible = !this.menuVisible;
    this.sidebarToggled.emit(this.menuVisible);
  }

  openSidebar() {
    this.menuVisible = true;
    this.sidebarToggled.emit(true);
  }

  closeSidebar() {
    this.menuVisible = false;
    this.sidebarToggled.emit(false);
  }

  @HostListener('window:resize')
  onResize() {
    this.menuVisible = window.innerWidth > 1024;
  }
}
