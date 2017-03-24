import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  template: `
    <p>
      subcomponent Works!
    </p>
    <app-subsubcomponent></app-subsubcomponent>
  `,
  styles: []
})
export class SubcomponentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
