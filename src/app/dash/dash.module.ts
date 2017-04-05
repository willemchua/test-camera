import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashFormComponent } from './dash-form/dash-form.component';
import { DashComponent } from './dash.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    DashComponent,
    DashFormComponent
  ]
})
export class DashModule { }
