import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IListUsers } from '../../utils/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http :HttpClient = inject(HttpClient)

  baseUrl :string = 'https://reqres.in/api/'

  getUsers() {
    return this.http.get<IListUsers>(`${this.baseUrl}users?page=2`)
  }
}
