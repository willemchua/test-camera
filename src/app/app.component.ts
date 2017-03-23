import { Component, trigger, state, style, transition, animate, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        left: '-150px'
      })),
      state('out', style({
        left: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements DoCheck{
  title = 'app works!';
  online:string;
  showThings: boolean = false;
  tulisan:string;
  

  constructor(public router:Router){}

  ngOnInit(){
    this.online = navigator.onLine?'App is online':'App is offline';
    // Observable.fromEvent(window, 'online').subscribe(() => this.online = 'App is online x');
    // Observable.fromEvent(window, 'offline').subscribe(() => this.online = 'App is offline x');
  }

  ngDoCheck(){
    // window.addEventListener('online', () => {this.online = 'App is online';});
    // window.addEventListener('offline', () => {this.online = 'App is offline';});

    Observable.fromEvent(window, 'online').subscribe(() => this.online = 'App is online loh');
    Observable.fromEvent(window, 'offline').subscribe(() => this.online = 'App is offline loh');

    if(!this.showThings)
      this.tulisan = 'Ceritanya jalan';
    else
      this.tulisan = 'Ceritanya ga jalan';
  }

  menuState:string = 'in';
    toggleMenu(){
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
      this.showThings = !this.showThings;
    }

    toggleMenu2(){
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

  redirectTo(key:any){
        this.router.navigateByUrl(key, {skipLocationChange: true} )
        this.toggleMenu();
  }
}
