import { Component, inject, input } from '@angular/core';
import { IUserInfo } from '../../utils/types';
import { UserService } from '../../data/services/user.service';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  user = input<IUserInfo>()
  userService = inject(UserService)

}
