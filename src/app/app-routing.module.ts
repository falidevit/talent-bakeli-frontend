import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BakelistByDomainComponent } from './components/bakelist-by-domain/bakelist-by-domain.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path: 'inscription-recruteur', component: InscriptionRecruteurComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'bakeliste-domaine', component: BakelistByDomainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
