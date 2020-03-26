import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartyComponent } from './party/party.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'new', component: PartyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
