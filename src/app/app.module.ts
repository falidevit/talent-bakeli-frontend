import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCouvertureAccueilComponent } from './components/page-couverture-accueil/page-couverture-accueil.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HeaderComponent } from './components/header/header.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DomainesComponent } from './components/domaines/domaines.component';


@NgModule({
  declarations: [
    AppComponent,
    PageCouvertureAccueilComponent,
    HomepageComponent,
    HowToWorkComponent,
    InscriptionRecruteurComponent,
    ContactFormComponent,
    DomainesComponent,
    ConnexionComponent,
    HeaderComponent,
    BakelisteProfileComponent,
    CarrousselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
