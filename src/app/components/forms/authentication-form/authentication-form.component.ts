import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAuthData } from '../../../utils/types';

@Component({
  selector: 'app-authentication-form',
  imports: [ReactiveFormsModule],
  templateUrl: './authentication-form.component.html',
  styleUrl: './authentication-form.component.scss'
})
export class AuthenticationFormComponent implements OnInit {

  @Input() title?: string;

  @Output() eventSubmit = new EventEmitter<IAuthData>()

  ngOnInit(): void {

}

  authForm = new FormGroup({
    email: new FormControl<string|null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string|null>(null, Validators.required)
  })

  onSubmit() {

    if (this.authForm.valid) {
      //console.log(this.authForm.value)
      this.eventSubmit.emit(this.authForm.value)
    }
  }
}
