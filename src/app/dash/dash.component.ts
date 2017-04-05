import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../app.reducer';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  totalEmp: number = 0;
  maleEmp: number = 0;
  femaleEmp: number = 0;

  constructor(private store:Store<any>) {
    this.store.select((obj:State) => obj.dashState).subscribe((x) => {
        this.maleEmp = x.maleEmployee;
        this.femaleEmp = x.femaleEmployee;
        this.totalEmp = x.maleEmployee + x.femaleEmployee;
    })
  }

  ngOnInit() {
  }
}