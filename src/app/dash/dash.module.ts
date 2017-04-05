import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashFormComponent } from './form/dash-form.component';
import { DashComponent } from './dash.component';
import { MaterialModule } from '@angular/material';
import { MenuFormComponent } from './menu-form/menu-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    DashComponent,
    DashFormComponent,
    MenuFormComponent
  ]
})
export class DashModule { }
