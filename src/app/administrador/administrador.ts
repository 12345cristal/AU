import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './administrador.html',
  styleUrls: ['./administrador.scss']
})
export class AdministradorComponent {}
