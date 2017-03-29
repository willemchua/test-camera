import { Injectable } from '@angular/core';
import { Book } from '../shared/interfaces';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleBookService {

  constructor(private http:Http) { }

  getData(query:string, maxRes:number):Observable<Book[]>{
    //console.log('Human Stupidity Checker getData');
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxRes}`)
      .map(res => {
        return res.json().items || []});
  }



}
