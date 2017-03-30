import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { FormControl } from '@angular/forms';

class Item{
  name:string;
  description:string;
}

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})

export class StateManagementComponent implements OnInit {
  profileName:string;
  counter:Observable<number>;
  
  searchControl = new FormControl();
  
  constructor(private store:Store<any>) {
    this.counter = store.select('counter');
    this.store.select('name').subscribe((name:string) => { this.profileName = name });
    this.store.subscribe((state: any) => { console.log(state); });

    this.searchControl.valueChanges
      .debounceTime(200)
      .subscribe(query => store.dispatch({type:"UPDATE_Y_QUERY",payload:{
        q:query
      }}));

   }

  ngOnInit() {
  }
  
}
  