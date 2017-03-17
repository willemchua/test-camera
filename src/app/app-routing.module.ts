import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CameraComponent} from './camera/camera.component';
import { CalendarComponent } from './calendar/calendar.component';
import {AppComponent} from './app.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: PageComponent},
  { path: 'camera', component: CameraComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
