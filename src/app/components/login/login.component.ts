import { Component, OnInit } from '@angular/core';

import { AuthService} from '../../services/authentication/auth.service'
import { Usuario} from '../../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public usuario: Usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn(this.usuario.email, this.usuario.password);
  }

  getErrorMessage(field) {
    return field.hasError('required') ? 'Campo obligatorio'
      : field.hasError('email') ? 'El email no es válido'
        : field.hasError('minlength') ? 'Mínimo 6 caracteres'
            : '';
  }

}
