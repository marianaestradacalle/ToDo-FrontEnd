import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if(this.authService.login()) {
      console.log('Debe cerrar sesión si desea salir');
      this.router.navigate(['/home']);
    }
    return true;
  }
  
}
