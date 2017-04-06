import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ActionTypes } from '../../const/action';

@Component({
  selector: 'app-dash-form',
  templateUrl: './dash-form.component.html',
  styleUrls: ['./dash-form.component.css']
})
export class DashFormComponent implements OnInit {

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit() {
  }

  submitForm(male, female){
    if(!male || !female)
      alert('Input can\'t be empty');
    else{
      this.store.dispatch({
        type: ActionTypes.UPDATE_EMP,
        payload: [parseInt(male), parseInt(female)]
      })

      return this.router.navigate(['dash']);
    }
  }

}
