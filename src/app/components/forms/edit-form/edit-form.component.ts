import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserInfo } from '../../../utils/types';

@Component({
  selector: 'app-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent {
  user :IUserInfo = {
    data: {
      id: '8',
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
    support: {
      url: 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral',
      text: 'Tired of writing endless social media content? Let Content Caddy generate it for you.'
    }
  }

  editForm = new FormGroup({
    email: new FormControl<string|null>(this.user.data.email, [Validators.required, Validators.email]),
    first_name: new FormControl<string|null>(this.user.data.first_name, Validators.required),
    last_name: new FormControl<string|null>(this.user.data.last_name, Validators.required),
    avatar: new FormControl<string|null>(this.user.data.avatar, Validators.required),
    url: new FormControl<string|null>(this.user.support.url, Validators.required),
    text: new FormControl<string|null>(this.user.support.text, Validators.required)
  })

  onSubmit() {

    if (this.editForm.valid) {
      console.log(this.editForm.value)
    }
  }

}
