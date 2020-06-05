import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  {FormsModule } from '@angular/forms'


// Rutas Y proteccion
import { APP_ROUTING} from './app.routes';
import { AuthGuard } from './services/guards/auth.guard';
import { LogoutGuard } from './services/guards/logout.guard';

// Servicios
import { UsuarioService } from './services/usuario/usuario.service';
import { LoginService } from './services/login/login.service';
import { AuthService } from './services/authentication/auth.service';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogupComponent } from './components/logup/logup.component';
import { TaskComponent } from './components/task/task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogupComponent,
    TaskComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    UsuarioService,
    LoginService,
    AuthService,
    AuthGuard,
    LogoutGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [TaskComponent]
})
export class AppModule { }
