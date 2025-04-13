import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IListUsers, IUserInfo } from '../../utils/types';
import { baseUrl } from '../../utils/constants';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http :HttpClient = inject(HttpClient)

  me = signal<IUserInfo | null>(null)

  getUsers() {
    return this.http.get<IListUsers>(`${baseUrl}users?page=2`)
  }

  getMe() {
    return this.http.get<IUserInfo>(`${baseUrl}users/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
  }

  getUser(id: string) {
    return this.http.get<IUserInfo>(`${baseUrl}users/${id}`)
  }

  putUser(user: Partial<IUserInfo>, id: string) {
    return this.http.put<IUserInfo>(
      `${baseUrl}users/${id}`,
      user
    )
  }
}
