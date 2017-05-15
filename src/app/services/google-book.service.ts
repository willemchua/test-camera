import { Injectable } from '@angular/core';
import { Book } from '../shared/interfaces';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Search } from '../shared/interfaces';

@Injectable()
export class GoogleBookService {

  constructor(private http:Http) { }

  getData(input: Search):Observable<Book[]>{
    let query = input.query;
    let maxRes = input.maxOutput;
      return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxRes}`)
        .map(res => {
          return res.json().items || []});
  }



}
