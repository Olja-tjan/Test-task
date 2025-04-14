import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser, IUserInfo } from '../../utils/types';
import { RouterLink } from '@angular/router';
import { UserService } from '../../data/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user?: IUser;

  @Output() eventDelete = new EventEmitter<string | undefined>()

  userService = inject(UserService)
  meId = this.userService.me()?.data.id

  handlerClick(id: string | undefined) {
    console.log(id)
    this.eventDelete.emit(id)
  }

}
