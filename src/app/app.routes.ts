import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: `user/:id`, component: UserInfoPageComponent},
  {path: 'edit', component: EditPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];
