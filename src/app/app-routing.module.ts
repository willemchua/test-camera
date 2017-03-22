import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CameraComponent} from './camera/camera.component';
import { CalendarPageComponent } from './calendar/calendar.component';
import {AppComponent} from './app.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '', component: PageComponent},
  { path: 'home', component: PageComponent},
  { path: 'camera', component: CameraComponent},
  { path: 'calendar', component: CalendarPageComponent},
  { path: 'test', component: TestComponent},
  { path: 'rxjs', component: RxjsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
