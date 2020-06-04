import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  logIn(usuario: Usuario) {

    return this.http.post(`${this.API_URL}/login`, usuario);
  }
}
