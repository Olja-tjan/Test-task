import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ResourceCardComponent } from '../../components/resource-card/resource-card.component';
import { UserService } from '../../data/services/user.service';
import { IResource, IUser, IUserInfo } from '../../utils/types';
import { ResourceService } from '../../data/services/resource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  imports: [UserCardComponent, ResourceCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  title = 'Test-task';

  userService = inject(UserService)
  users :IUser[] = []

  resourceService = inject(ResourceService)
  resources :IResource[] = []

  constructor() {
    this.userService.getUsers()
      .subscribe( val => {
        this.users = val.data
      })

    this.resourceService.getResources()
      .subscribe( val => {
        this.resources = val.data
      })
  }

  public handleEvent(id: string | undefined) {
    console.log(`handleEvent: ${id}`)
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
