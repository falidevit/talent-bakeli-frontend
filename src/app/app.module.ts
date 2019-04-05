import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {DomainesComponent} from './components/domaines/domaines.component';
import { ConnectComponent } from './connect/connect.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DomainesComponent,
    ConnectComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
