import { Injectable } from '@angular/core';
import { Chat } from '../shared/interfaces';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatbotService {

  constructor(private http:Http) { }

  getData(input: Chat):Observable<Response>{
    let chat = input.chat;
    return this.http.get(`http://localhost:8080/search?query=${chat}`)
      .map((res:Response) => res.json());
    };


  }
