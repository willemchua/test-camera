import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';
import { MaterialModule } from '@angular/material';

import { AccordionModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            //api
import { ChartModule } from 'primeng/primeng';

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
import { reducer } from './app.reducer';
import { BookSearchComponent } from './book-search/book-search.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

import { YouTubeAPI } from './state-management/state-management.service';
import { DashModule } from './dash/dash.module';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatBoxComponent } from './chatbot/chat-box/chat-box.component';

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
    SubsubsubcomponentComponent,
    BookSearchComponent,
    SearchboxComponent,
    ChatbotComponent,
    ChatBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    StoreModule.provideStore(reducer),
    MaterialModule,
    DashModule
  ],
  providers: [YouTubeAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
