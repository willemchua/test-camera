import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(private store:Store<any>) { }

  listRes:number[] = [3, 5, 10, 20, 30, 40];

  ngOnInit() {
  }

  doStuff(input:any)
  {
    // console.log('Before:');
    // console.log(this.store.select('search'));

    if(typeof input === "number"){
      //console.log(this.listRes[input]);
      this.store.dispatch({
        type: "UPDATE_MAXRES",
        payload: this.listRes[input]
      })
    }
    else if(typeof input === "string"){
      //console.log(input);
      if(input)
        this.store.dispatch({
          type: "UPDATE_QUERY",
          payload: input
        })
      else{
          this.store.dispatch({
          type: "RESET"
        })
        }
    }

  }

} 
