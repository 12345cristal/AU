import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  menuVisible = window.innerWidth > 1024; // visible por defecto en desktop
  panelPrincipalOpen = false;
  gestionClinicaOpen = false;
  administracionOpen = false;

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
    if (window.innerWidth > 1024) {
      // Desktop: sidebar siempre visible
      this.menuVisible = true;
    } else {
      // Tablet/Móvil: sidebar oculto al cargar
      this.menuVisible = false;
    }
  }
}
