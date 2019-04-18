import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';
import {AllProfilComponent } from './components/all-profil/all-profil.component';
import { CvModelBakeliComponent } from './components/cv-model-bakeli/cv-model-bakeli.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'inscription-recruteur', component: InscriptionRecruteurComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'se-connecter', component: ConnexionComponent},
  { path: 'profil-bakeliste', component: BakelisteProfileComponent },
  { path: 'contact-form', component: ContactFormComponent },
  {path: 'bakeliste-domaine', component: BakelistByDomainComponent},
  { path: 'tous-les-bakelistes', component: AllProfilComponent},
  { path: 'detail-bakeliste', component:CvModelBakeliComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
