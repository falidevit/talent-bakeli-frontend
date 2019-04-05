import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {DomainesComponent} from './components/domaines/domaines.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DetailBakelisteComponent } from './components/detail-bakeliste/detail-bakeliste.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DomainesComponent,
    CarrousselComponent,
    DetailBakelisteComponent,
    InscriptionRecruteurComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
