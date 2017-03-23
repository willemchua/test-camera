import { Component, OnInit, DoCheck, OnChanges, ViewChild } from '@angular/core';
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
    // this.subject.subscribe({
    //   next: (x) => console.log(x)
    // });

    // this.subject.subscribe({
    //   next: (x) => {
    //     if(x > 4){
    //       //console.log('ini juga jalan');
    //       (document.getElementById("btnClick") as HTMLButtonElement).setAttribute('disabled', 'disabled');
    //     }
    //     else{
    //       //console.log('ini baru jalan');
    //       (document.getElementById("btnClick") as HTMLButtonElement).removeAttribute('disabled');
    //     }
    //   }
    // });
    
    // let stream$ = new Observable(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //   }, 500);
    // });

    // stream$.map((value:number) => value*value*value*value*value).subscribe(value => console.log(value));

    let button = document.getElementById("btnClick");
    let text = document.getElementById("name");

    Observable.fromEvent(text, 'change').subscribe((event) => {
      
      console.log('ini jalan');
      if((text as HTMLInputElement).value.length > 4)
        (button as HTMLButtonElement).disabled = true;
      else
        (button as HTMLButtonElement).disabled = false;
    });



  }

  ngOnChanges() {
  }

  ngDoCheck(){

    // this.observable = new Subject(observer => {
    //   console.log('hai');
    //   observer.next(this.text.length);
    // });

    // let subscription = this.observable.subscribe(
    //   x => {
    //     console.log('ini jalan');
    //     console.log(x);
    //     if(x > 4){
    //       console.log('ini juga jalan');
    //       (document.getElementById("btnClick") as HTMLButtonElement).disabled = true;
    //     }
    //     else{
    //       console.log('ini baru jalan');
    //       (document.getElementById("btnClick") as HTMLButtonElement).disabled = false;
    //     }
    //   }
    // )

    //this.subject.next(this.text);
  }

  doClick()
  {
    this.str = "Hai";

  }

  pushNum(num){
    this.subject.next(num);
  }

  completeSubA(){
    this.subscriptionA.complete();
  }
  

}
