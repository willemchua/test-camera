import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  redir:string;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  redirectTo(key)
  {
    if(key === 1)
      this.router.navigateByUrl("/camera", { skipLocationChange: true });
    else if(key === 2)
      this.router.navigateByUrl("/calendar", { skipLocationChange: true });
    else
      this.router.navigateByUrl("/test", { skipLocationChange: true });
  }
}
