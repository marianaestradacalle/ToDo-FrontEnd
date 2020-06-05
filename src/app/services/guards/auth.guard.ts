import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {

    if (!this.authService.login()) {
      console.log('No está logueado');
      this.router.navigate(['/login']);
      return false;      
    }
    return true;
  };
  
  
}
