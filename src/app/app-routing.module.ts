import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CameraComponent} from './camera/camera.component';
import { CalendarPageComponent } from './calendar/calendar.component';
import {AppComponent} from './app.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { DashComponent } from './dash/dash.component';
import { DashFormComponent } from './dash/dash-form/dash-form.component';

const routes: Routes = [
  { path: '', component: PageComponent},
  { path: 'home', component: PageComponent},
  { path: 'camera', component: CameraComponent},
  { path: 'calendar', component: CalendarPageComponent},
  { path: 'test', component: TestComponent},
  { path: 'rxjs', component: RxjsComponent},
  { path: 'state-management', component: StateManagementComponent},
  { path: 'book-search', component: BookSearchComponent},
  { 
    path: 'dash', 
    children:[
      { path:'', component: DashComponent },
      { path:'edit', component: DashFormComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
