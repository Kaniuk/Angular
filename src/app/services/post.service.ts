import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private postHttp: HttpClient) {
  }

  getPosts(): Observable<IPosts[]> {
    return this.postHttp.get<any[]>(this.postUrl)
  }
}
