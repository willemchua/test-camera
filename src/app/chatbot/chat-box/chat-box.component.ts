import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  doStuff(input: string) {
    this.store.dispatch({
      type: 'UPDATE',
      payload: input
    })

  }
}
