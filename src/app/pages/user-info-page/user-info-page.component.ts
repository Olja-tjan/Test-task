import { Component } from '@angular/core';
import { IUserInfo } from '../../utils/types';

@Component({
  selector: 'app-user-info-page',
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss'
})
export class UserInfoPageComponent {
  user :IUserInfo = {
    data: {
      id: 8,
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

}
