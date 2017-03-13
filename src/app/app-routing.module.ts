import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CameraComponent} from './camera/camera.component';
import {AppComponent} from './app.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'home', component: PageComponent},
  { path: 'camera', component: CameraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
