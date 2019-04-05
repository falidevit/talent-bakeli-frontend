import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageCouvertureAccueilComponent } from './components/page-couverture-accueil/page-couverture-accueil.component';

import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
<<<<<<< HEAD
import { DomainesComponent } from './components/domaines/domaines.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
=======
import { DomainesComponent } from './components/domaines/domaines.component'; 

>>>>>>> 54f04b01a3e39d85ac576d9d62b8d0d0d8f2bf8e

@NgModule({
  declarations: [
    AppComponent,
    PageCouvertureAccueilComponent,
    HomepageComponent,
    HowToWorkComponent,
    InscriptionRecruteurComponent,
    ContactFormComponent,
<<<<<<< HEAD
    DomainesComponent,
    ConnexionComponent
    
=======
    DomainesComponent

>>>>>>> 54f04b01a3e39d85ac576d9d62b8d0d0d8f2bf8e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
