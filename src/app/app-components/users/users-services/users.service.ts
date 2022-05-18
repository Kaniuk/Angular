import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserInterface} from "../../../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this._url);
  }

  getById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(this._url + '/' + id);
  }

}
