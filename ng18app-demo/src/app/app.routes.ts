import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CnotactComponent } from './cnotact/cnotact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
 
        path: 'hom',
        component: HomeComponent
    },
    {
       path: 'about',
       component:AboutComponent
    },
    {
        path: 'cnotact',
        component:CnotactComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
       path:'register',
       component:RegisterComponent
    }
];  
