import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { Chat } from '../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../app.reducer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  providers: [ChatbotService]
})
export class ChatbotComponent implements OnInit {

  chat: Observable<Chat>;

  constructor(private store:Store<any>, private chatbotService: ChatbotService) { }

  ngOnInit() {
    this.store.select((obj:State) => obj.chatbotState).subscribe((x: Chat) => {
      console.log(x);
      if(x.chat !== '')
        this.chat = this.chatbotService.getData(x).map(res => {
          console.log(res);
          return res;
        });
      else
        this.chat = Observable.of({chat: ''});
    });
  }

  doStuff(input: string) {
    console.log('ini jalan')
    this.store.dispatch({
      type: 'UPDATE',
      payload: input
    })

  }

}
