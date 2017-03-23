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
<<<<<<< HEAD
    this.router.navigateByUrl(key, { skipLocationChange: true })
    // if(key === 1)
    //   this.router.navigateByUrl("/camera", { skipLocationChange: true });
    // else if(key === 2)
    //   this.router.navigateByUrl("/calendar", { skipLocationChange: true });
    // else if(key === 3)
    //   this.router.navigateByUrl("/test", { skipLocationChange: true });
    // else if(key === 4)
    //   this.router.navigateByUrl("/rxjs", { skipLocationChange: true });
=======
    this.router.navigateByUrl(key, {skipLocationChange: true} )
>>>>>>> a2827bbda2bf141c54d480fd530154e23c3cf4b4
  }
}
