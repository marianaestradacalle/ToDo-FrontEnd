import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  logIn(email: String, password:String) {
    this.http.post(`${this.API_URL}/login`, {email: email, password: password}).subscribe( (res: any) => {
      localStorage.setItem('auth_token', res.token)
      localStorage.setItem('nombre', res.usuario.nombre)
      this.router.navigate(['/home']);
    })
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
  
  public get login(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
