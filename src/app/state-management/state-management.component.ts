import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { YouTubeAPI } from './state-management.service';
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
  // profileName:string;
  // counter:Observable<number>;
  // results: Observable<any>;
  // searchControl = new FormControl();
  
  constructor(private store:Store<any>, private youtube:YouTubeAPI) {
    // this.counter = store.select('counter');
    // this.store.select('name').subscribe((name:string) => { this.profileName = name });
    // this.store.subscribe((state: any) => { console.log(state); });


    // // //observable of results
    // // this.results = 
    // // //input value change observable
    // //   this.searchControl.valueChanges
    // //     .debounceTime(200) //debounce for 200ms
    // //     .switchMap(query => youtube.search(query));
    // //     //switchMap flattens the async and cancels the pending request if a new value is requested
    
   }

  ngOnInit() {
  }
  
}
  