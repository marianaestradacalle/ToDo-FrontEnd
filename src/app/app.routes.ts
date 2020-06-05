import { RouterModule, Routes, CanActivate } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import { LogupComponent } from './components/logup/logup.component';

import { AuthGuard } from './services/guards/auth.guard';
import { LogoutGuard } from './services/guards/logout.guard';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'logup', component: LogupComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);