import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})

export class StateManagementComponent implements OnInit {
  profileName:Observable<string>;
  counter:Observable<number>;

  constructor(private store:Store<any>) {
    this.counter = store.select('counter');
    this.profileName = store.select('name');
   }

  ngOnInit() {
  }

}
