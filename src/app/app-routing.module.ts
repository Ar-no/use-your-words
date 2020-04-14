import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponent } from './party/create/create.component';
import { JoinComponent } from './party/join/join.component';


const routes: Routes = [
  { path: 'new', component: CreateComponent },
  { path: 'join', component: JoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
