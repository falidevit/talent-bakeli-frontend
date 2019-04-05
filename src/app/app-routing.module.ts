import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
<<<<<<< HEAD
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path: 'inscription-recruteur', component: InscriptionRecruteurComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'bakeliste-domaine', component: BakelistByDomainComponent},
=======
import { ConnexionComponent } from './components/connexion/connexion.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'inscription-recruteur', component: InscriptionRecruteurComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'profil-bakeliste', component: BakelisteProfileComponent }
>>>>>>> 6147c1c14c998faa217b3f855f1789d3bcae2a94

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
