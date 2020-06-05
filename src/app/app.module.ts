import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  {FormsModule } from '@angular/forms'


// Rutas
import { APP_ROUTING} from './app.routes';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogupComponent,
    TaskComponent
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
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [TaskComponent]
})
export class AppModule { }
