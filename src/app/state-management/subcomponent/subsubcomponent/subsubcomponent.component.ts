import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subsubcomponent',
  template: `
    <p>
      subsubcomponent Works! {{profileName}}
    </p>
    <app-subsubsubcomponent></app-subsubsubcomponent>
  `,
  styles: []
})
export class SubsubcomponentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
