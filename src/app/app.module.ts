import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageCouvertureAccueilComponent } from './components/page-couverture-accueil/page-couverture-accueil.component';

import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';


@NgModule({
  declarations: [
    AppComponent,
    PageCouvertureAccueilComponent,
    HomepageComponent,
    HowToWorkComponent,
    InscriptionRecruteurComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
