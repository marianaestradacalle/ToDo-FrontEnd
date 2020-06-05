import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tarea } from '../../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  API_URL = 'http://localhost:3000';

  constructor( private http: HttpClient) { }
  
  getTarea() {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    return this.http.get(`${this.API_URL}/tarea`, { headers});
  }

  getTareaOne(id: string) {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    return this.http.get(`${this.API_URL}/tarea/${id}`, { headers});
  }

  saveTarea(tarea: Tarea) {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    return this.http.post(`${this.API_URL}/tarea`, tarea, { headers });
  }

  updateTarea(id: string, tarea: Tarea) {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    return this.http.put(`${this.API_URL}/tarea/${id}`, tarea, {headers});
  }

  deleteTarea(id: string) {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'token': `${token}`
    });
    return this.http.delete(`${this.API_URL}/tarea/${id}`, {headers});
  }


}
