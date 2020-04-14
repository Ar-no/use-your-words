import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PartyComponent } from './party/party.component';
import { PartyService } from './party/party.service';
import { JoinComponent } from './party/join/join.component';
import { CreateComponent } from './party/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    JoinComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [
    PartyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
