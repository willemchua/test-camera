import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../app.reducer';
import { MENU } from '../const/const';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  totalEmp: number = 0;
  maleEmp: number = 0;
  femaleEmp: number = 0;

  menu = MENU;
  menuIndex;

  constructor(private store:Store<any>) {
    this.store.select((obj:State) => obj.dashState).subscribe((x) => {
        this.maleEmp = x.dashForm.maleEmployee;
        this.femaleEmp = x.dashForm.femaleEmployee;
        this.totalEmp = this.maleEmp + this.femaleEmp;
        this.menuIndex = x.menuForm.menu;
    })
  }

  ngOnInit() {
  }

}
