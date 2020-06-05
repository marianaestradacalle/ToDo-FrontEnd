import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import { LogupComponent } from './components/logup/logup.component';
import { TaskComponent } from './components/task/task.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'logup', component: LogupComponent},
    {path: 'task', component: TaskComponent},
    {path: 'task/edit/:id', component: TaskComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);