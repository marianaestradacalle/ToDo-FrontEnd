import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  usuario: Usuario = {
    nombre: '',
    email: '',
    password: ''
  }  

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUsuario() {
    this.usuarioService.saveUsuario(this.usuario)
      .subscribe( res => {
        this.router.navigate(['login'])
        console.log(res);
      }, err => {
        console.log('No se pudo conectar', err);
      });
  }

}
