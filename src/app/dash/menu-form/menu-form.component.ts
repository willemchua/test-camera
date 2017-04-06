import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Store } from "@ngrx/store";

import * as CONST from '../../const/const';
import { ActionTypes } from '../../const/action';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  menu = CONST.MENU;

  constructor(private router:Router, private store:Store<any>) { }

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

}
