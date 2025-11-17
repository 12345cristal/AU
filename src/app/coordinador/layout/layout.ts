import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../components/sidebar/sidebar';
import { ToolbarComponent } from '../components/toolbar/toolbar';

@Component({
  selector: 'app-layout-coordinador',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, ToolbarComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent {

  sidebarOpen = window.innerWidth > 1024;

  constructor() {
    window.addEventListener('toggle-sidebar', () => {
      this.sidebarOpen = !this.sidebarOpen;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.sidebarOpen = window.innerWidth > 1024;
  }
}
