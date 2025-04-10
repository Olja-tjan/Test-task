import { Component, Input } from '@angular/core';
import { IUser } from '../../utils/types';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: IUser;
}
