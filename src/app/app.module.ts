import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DomainesComponent } from './components/domaines/domaines.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HowToWorkComponent,
    InscriptionRecruteurComponent,
    BakelistByDomainComponent,
    ContactFormComponent,
    DomainesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
