import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navItems: NavItem[] = [
    { path: 'inicio', icon: 'fas fa-home', label: 'Inicio' },
    { path: 'asistente-ia', icon: 'fas fa-brain', label: 'Asistente IA' },
    { path: 'mi-hijo', icon: 'fas fa-child', label: 'Mi Hijo' },
    { path: 'progreso', icon: 'fas fa-chart-line', label: 'Progreso' },
    { path: 'citas', icon: 'fas fa-calendar-alt', label: 'Citas' },
    { path: 'mensajes', icon: 'fas fa-envelope', label: 'Mensajes' },
    { path: 'comunicados', icon: 'fas fa-bullhorn', label: 'Comunicados' },
    { path: 'reportes', icon: 'fas fa-file-alt', label: 'Reportes' },
    { path: 'recursos', icon: 'fas fa-book', label: 'Recursos' },
    { path: 'configuracion', icon: 'fas fa-cog', label: 'Configuración' }
  ];
}