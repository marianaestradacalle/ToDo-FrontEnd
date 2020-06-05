import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public nombre: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('nombre');
  }

  logOut() {
    this.authService.logout();
  }

}
