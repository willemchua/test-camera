import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { DashComponent } from './dash.component';
import { MaterialModule } from '@angular/material';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BrowserModule
  ],
  declarations: [
    DashComponent,
    MenuFormComponent,
    DashFormComponent
  ]
})
export class DashModule { }
