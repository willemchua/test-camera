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
    this.router.navigateByUrl(key);
  }
}
