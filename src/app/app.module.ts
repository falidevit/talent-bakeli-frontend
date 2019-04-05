import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BakelisteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
