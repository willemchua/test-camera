import { Component, trigger, state, style, transition, animate, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

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
  onlineCheck: boolean;

  constructor(public router:Router){}

  ngDoCheck(){
    window.addEventListener('online', () => {this.online = 'App is online';});

    window.addEventListener('offline', () => {this.online = 'App is offline';});

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
    if(key === 1)
      {
        this.router.navigateByUrl("/home", { skipLocationChange: true });
        //this.router.navigate(['/home']);
        this.toggleMenu();
      }
  }
}
