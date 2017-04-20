import { Injectable } from '@angular/core';
import { Chat } from '../shared/interfaces';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatbotService {

  constructor(private http:Http) { }

  getData(input: Chat):Observable<Chat>{
    console.log(input);
    let chat = input.chat;

    return this.http.get(`https://localhost:5000/parse?q=${chat}`)
        .map(res => {
        return res.json().items || []});
  }

}
