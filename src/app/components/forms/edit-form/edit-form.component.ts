import { UserService } from './../../../data/services/user.service';
import { IUserInfo } from './../../../utils/types';
import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent {
  userService = inject(UserService)

  meId = this.userService.me()?.data.id;

  editForm = new FormGroup({
    email: new FormControl<string|null>('', [Validators.required, Validators.email]),
    first_name: new FormControl<string|null>('', Validators.required),
    last_name: new FormControl<string|null>('', Validators.required),
    avatar: new FormControl<string|null>('', Validators.required),
    url: new FormControl<string|null>('', Validators.required),
    text: new FormControl<string|null>('', Validators.required)
  })

  onSubmit(): void {
    if (this.editForm.valid && this.meId === "string") {
      const formData = this.createFormData();
      console.log(formData);
      this.userService.putUser(<IUserInfo>formData, this.meId)
    }
  }

  createFormData() {
    const { email, first_name, last_name, avatar, url, text } = this.editForm.value;

    return {
      data: {
        email: email,
        first_name: first_name,
        last_name: last_name,
        avatar: avatar
      },
      support: {
        url: url,
        text: text
      }
    };
  }

  createFormValue(userValue: IUserInfo) {
    return {
      email: userValue.data.email,
      first_name: userValue.data.first_name,
      last_name: userValue.data.last_name,
      avatar: userValue.data.avatar,
      url: userValue.support.url,
      text: userValue.support.text
    }
  }

  constructor() {
    effect( () => {
      const meData = this.userService.me()
      console.log(meData)
      if(meData !== null) {
        this.editForm.patchValue(this.createFormValue(meData))
      }
    })
  }

}
