import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageCouvertureAccueilComponent } from './components/page-couverture-accueil/page-couverture-accueil.component';

import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
<<<<<<< HEAD
import {DomainesComponent} from './components/domaines/domaines.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DetailBakelisteComponent } from './components/detail-bakeliste/detail-bakeliste.component';
=======
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
<<<<<<< HEAD
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DomainesComponent } from './components/domaines/domaines.component';
=======
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DomainesComponent } from './components/domaines/domaines.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HeaderComponent } from './components/header/header.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';

>>>>>>> 6147c1c14c998faa217b3f855f1789d3bcae2a94

>>>>>>> 5ddb3ea9cf59bb5ba14d6bcd9ba2b54c3fbc18e4
@NgModule({
  declarations: [
    AppComponent,
    PageCouvertureAccueilComponent,
    HomepageComponent,
<<<<<<< HEAD
    DomainesComponent,
    CarrousselComponent,
    DetailBakelisteComponent,
    InscriptionRecruteurComponent,
    ContactFormComponent
=======
    HowToWorkComponent,
    InscriptionRecruteurComponent,
<<<<<<< HEAD
    BakelistByDomainComponent,
    ContactFormComponent,
    DomainesComponent
=======
    ContactFormComponent,
    DomainesComponent,
    ConnexionComponent,
    HeaderComponent,
    BakelisteProfileComponent
>>>>>>> 5ddb3ea9cf59bb5ba14d6bcd9ba2b54c3fbc18e4
>>>>>>> 6147c1c14c998faa217b3f855f1789d3bcae2a94
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
