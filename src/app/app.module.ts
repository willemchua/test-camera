import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MomentModule} from 'angular2-moment/moment.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';
import { CalendarPageComponent } from "./calendar/calendar.component";
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { RxjsComponent } from './rxjs/rxjs.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { SubcomponentComponent } from './state-management/subcomponent/subcomponent.component';
import { SubsubcomponentComponent } from './state-management/subcomponent/subsubcomponent/subsubcomponent.component';
import { SubsubsubcomponentComponent } from './state-management/subcomponent/subsubcomponent/subsubsubcomponent/subsubsubcomponent.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer, profileNameReducer } from './state-management/state-management';

import { YouTubeAPI } from './state-management/state-management.service';
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    PageComponent,
    TestComponent,
    CalendarPageComponent,
    CalendarComponent,
    RxjsComponent,
    StateManagementComponent,
    SubcomponentComponent,
    SubsubcomponentComponent,
    SubsubsubcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    StoreModule.provideStore({ counter: counterReducer, name: profileNameReducer })
  ],
  providers: [YouTubeAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
