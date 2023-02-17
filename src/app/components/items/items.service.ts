import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const api = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getAllPosts(): Observable<any>{
    return this.http.get(api);
  }
}
