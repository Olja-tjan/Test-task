import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IListResource } from '../../utils/types';
import { baseUrl } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  http :HttpClient = inject(HttpClient)

  getResources() {
    return this.http.get<IListResource>(`${baseUrl}unknown`)
  }
}
