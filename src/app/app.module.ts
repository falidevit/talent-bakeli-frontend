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
import { CvModelBakeliComponent } from './components/cv-model-bakeli/cv-model-bakeli.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';
import { CvthequeService } from './services/cvtheque/cvtheque.service';
import { HomepageV2Component } from './components/homepage-v2/homepage-v2.component';

import {Ng2TelInputModule} from 'ng2-tel-input';



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
    CustomersComponent,
    CvModelBakeliComponent,
    HomepageV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2TelInputModule
  ],
  providers: [
    UsersService,
    CvthequeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
