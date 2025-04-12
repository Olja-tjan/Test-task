import { Component } from '@angular/core';
import { AuthenticationFormComponent } from '../../components/forms/authentication-form/authentication-form.component';
import { IAuthData } from '../../utils/types';

@Component({
  selector: 'app-login-page',
  imports: [AuthenticationFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public formTitle: string = 'Sign in your profile'

  formValue: IAuthData = {
    email: null,
    password: null
  }

  public handleEvent(value: IAuthData) {
    this.formValue = value;
    console.log(value)
  }
}
