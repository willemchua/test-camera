import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Store } from "@ngrx/store";

import * as CONST from '../../const/const';
import { ActionTypes } from '../../const/action';
import { State } from "../../app.reducer";

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  menu = CONST.MENU;
  menuIndex;

  constructor(private router:Router, private store:Store<any>) { 
    this.store.select((obj:State) => obj.dashState).subscribe((x) => {
        this.menuIndex = x.menuForm.menu;
    })
  }

  ngOnInit() {
  }

  submitForm(menu1, menu2, menu3, menu4){

    let menuList = [menu1, menu2, menu3, menu4]

    if(menuList.length !== _.uniq(menuList).length)
      alert('Duplicate menus');
    else{
      this.store.dispatch({
        type: ActionTypes.UPDATE_MENU,
        payload: menuList
      })

      return this.router.navigate(['dash']);
    }
  }

  selectItem(menuItem){
    if(menuItem === this.menu[this.menuIndex[0]]){
      console.log(menuItem);
      return 'selected';
    }
    else
      return 'false';
  }
}