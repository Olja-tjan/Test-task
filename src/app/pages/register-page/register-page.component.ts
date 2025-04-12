import { Component } from '@angular/core';
import { AuthenticationFormComponent } from '../../components/forms/authentication-form/authentication-form.component';
import { IAuthData } from '../../utils/types';

@Component({
  selector: 'app-register-page',
  imports: [AuthenticationFormComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  public formTitle: string = 'Register'

  formValue: IAuthData = {
    email: null,
    password: null
  }

  public handleEvent(value: IAuthData) {
    this.formValue = value;
    console.log(value)
  }

}
