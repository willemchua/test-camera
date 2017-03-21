import { Component, trigger, state, style, transition, animate } from '@angular/core';
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
export class AppComponent {
  title = 'app works!';

  constructor(public router:Router){}

  menuState:string = 'in';
    toggleMenu(){
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
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
