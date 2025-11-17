import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar-coordinador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class ToolbarComponent {

  notificationCount = 3; // Demo, se cambiará por servicio real después

  toggleSidebar() {
    window.dispatchEvent(new CustomEvent('toggle-sidebar'));
  }

}
