import { Component, trigger, state, style, transition, animate, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

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
  online:string;
  showThings: boolean = false;
  tulisan:string;
  counter: number = 0;
  profileName: string;

  constructor(public router:Router, private store:Store<any>){
    this.store.select((obj) => obj.stateManagementState.profile).subscribe((x:string) => this.profileName = x);
    this.store.select((obj) => obj.stateManagementState.counter).subscribe((x:number) => this.counter = x);
  }

  ngOnInit(){
    this.online = navigator.onLine?'App is online':'App is offline';
    Observable.fromEvent(window, 'online').subscribe(() => this.online = 'App is online loh');
    Observable.fromEvent(window, 'offline').subscribe(() => this.online = 'App is offline loh');
  }

  ngDoCheck(){
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
    this.router.navigateByUrl(key)
    this.toggleMenu();
  }

}
