import { UserService } from './../../data/services/user.service';
import { Component, inject } from '@angular/core';
import { UserInfoComponent } from "../../components/user-info/user-info.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-info-page',
  imports: [UserInfoComponent, AsyncPipe, RouterLink],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss'
})
export class UserInfoPageComponent {
  userService = inject(UserService)
  route = inject(ActivatedRoute)

  me$ = toObservable(this.userService.me)

  userInfo$ = this.route.params
    .pipe(
      switchMap(({id}) => {
        if (id === 'me') return this.me$
        return this.userService.getUser(id)
      })
    )

}
