import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../services/authentication/auth.service'
import { Usuario} from '../../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
  email: '',
    password: '',
  }
    
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Login() {
    this.authService.logIn(this.usuario.email, this.usuario.password);
      this.router.navigate(['home']);
}

}
