import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCouvertureAccueilComponent } from './components/page-couverture-accueil/page-couverture-accueil.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {DomainesComponent} from './components/domaines/domaines.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DetailBakelisteComponent } from './components/detail-bakeliste/detail-bakeliste.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HeaderComponent } from './components/header/header.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';
import { AllProfilComponent } from './components/all-profil/all-profil.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCouvertureAccueilComponent,
    HomepageComponent,
    DomainesComponent,
    CarrousselComponent,
    DetailBakelisteComponent,
    InscriptionRecruteurComponent,
    ContactFormComponent,
    HowToWorkComponent,
    InscriptionRecruteurComponent,
    ConnexionComponent,
    HeaderComponent,
    BakelisteProfileComponent,
    CarrousselComponent,
    BakelistByDomainComponent,
    AllProfilComponent,
    FooterComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
