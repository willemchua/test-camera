import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsubcomponent',
  template: `
    <p>
      subsubcomponent Works!
    </p>
  `,
  styles: []
})
export class SubsubcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
