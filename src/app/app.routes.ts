import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'user', component: UserInfoPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];
