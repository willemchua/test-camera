import { Component, OnInit, DoCheck, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit, DoCheck, OnChanges {


  @ViewChild('btnSubmit') btnSubmit: any;
  output:string = 'Ceritanya string kosong';
  str:string = "";

  subject;
  subscriptionA;
  subscriptionB;

  constructor() { }

  ngOnInit(){
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

    // let button = document.getElementById("btnClick");
    // let text = document.getElementById("name");

    // Observable.fromEvent(text, 'change').subscribe((event) => {
      
    //   console.log('ini jalan');
    //   if((text as HTMLInputElement).value.length > 4)
    //     (button as HTMLButtonElement).disabled = true;
    //   else
    //     (button as HTMLButtonElement).disabled = false;
    // });



  }

  ngOnChanges() {
  }

  ngDoCheck(){
  }

  doClick(text:string, button:any)
  {
    if(text.length < 4)
      this.str = text;
    else
      this.str = "Hai";
  }

  doShit(text:string)
  {
    if(text.length > 4){
      this.btnSubmit.nativeElement.disabled = true;
      }
    else
      this.btnSubmit.nativeElement.disabled = false;
  }

  pushNum(num){
    this.subject.next(num);
  }

  completeSubA(){
    this.subscriptionA.complete();
  }
  

}
