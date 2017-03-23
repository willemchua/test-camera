import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  template: `
    <p>
      subcomponent Works!
    </p>
  `,
  styles: []
})
export class SubcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
