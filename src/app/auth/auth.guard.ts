import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuario = this.auth.getUsuario();

    if (this.auth.isAuthenticated()) {
      // Si intenta ir al login estando autenticado, redirigir a su panel
      if (state.url === '/login' && usuario?.rol) {
        switch (usuario.rol) {
          case 1: this.router.navigate(['/administrador/inicio']); break;
          case 2: this.router.navigate(['/coordinador/inicio']); break;
          default: this.router.navigate(['/']); break;
        }
        return false;
      }
      return true;
    }

    // No autenticado → al login
    this.router.navigate(['/login']);
    return false;
  }
}