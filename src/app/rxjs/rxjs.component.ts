import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  subject;
  subscriptionA;
  subscriptionB;
  constructor() { }

  ngOnInit() {
    this.subject = new Subject();
    console.log("buat subject");
    this.subscriptionA = this.subject.subscribe({
      next: x => console.log('A got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('A done'),
    });
    this.subscriptionB = this.subject.subscribe({
      next: x => console.log('B got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('B done'),
    });
    
  }

  pushNum(num){
    this.subject.next(num);
  }

  completeSubA(){
    this.subscriptionA.complete();
  }

}
