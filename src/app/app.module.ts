import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainesComponent } from './components/domaines/domaines.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {Route} from '@angular/router'
 const routes : Routes = [
  {path:'',component:HomepageComponent},
  {path: 'home',component:HomepageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    DomainesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
