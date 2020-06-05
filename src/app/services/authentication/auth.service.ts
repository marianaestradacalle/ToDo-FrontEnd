import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TareasService } from '../tareas/tareas.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router, private tareaService: TareasService) { }

  logIn(email: String, password:String) {
    this.http.post(`${this.API_URL}/login`, {email: email, password: password}).subscribe( (res: any) => {
      localStorage.setItem('auth_token', res.token)
      localStorage.setItem('nombre', res.usuario.nombre)
      this.router.navigate(['/home'])
      
      this.tareaService.getTarea().subscribe((res: any) => {
        let cont = 0;
        res.tareas.forEach((tarea) => {
          cont = tarea.proxV ? cont += 1 : cont += 0;
        });
        if (cont > 0) {
          Swal.fire('Tienes tareas que pronto se van a vencer');
        }
      }, err => {
        console.log(err);
      })
    })
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
  
  public login(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
