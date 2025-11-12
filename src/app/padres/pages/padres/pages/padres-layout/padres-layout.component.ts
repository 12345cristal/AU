import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../../../components/header/header.component';

@Component({
  selector: 'app-padres-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent,RouterOutlet],
  templateUrl: './padres-layout.component.html',
  styleUrls: ['./padres-layout.component.scss']
})
export class PadresLayoutComponent {}
