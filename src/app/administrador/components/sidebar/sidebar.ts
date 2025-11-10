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
  // Estado del sidebar (abierto o cerrado)
  @HostBinding('class.open') isOpen = false;

  // Alternar visibilidad del sidebar
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
}
