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

  chat;

  constructor(private store:Store<any>, private chatbotService: ChatbotService) { 
  }

  ngOnInit() {
    this.store.select((obj:State) => {return obj.chatbotState}).subscribe((x: Chat) => {
      if(x.chat !== '')
        this.chat = this.chatbotService.getData(x).map((x: any) => 
          {return x.title});
      else
        this.chat = '';
    });
  }

}
