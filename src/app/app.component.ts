import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./components/user-card/user-card.component";
import { UserService } from './data/services/user.service';
import { IUser } from './utils/types';
import { JsonPipe } from '@angular/common';
import { ResourceCardComponent } from "./components/resource-card/resource-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, JsonPipe, ResourceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test-task';
  userService = inject(UserService)
  users :IUser[] = []

  constructor() {
    this.userService.getUsers()
      .subscribe( val => {
        this.users = val.data
      })
  }
}
