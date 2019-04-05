import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BakelisteProfileComponent } from './components/bakeliste-profile/bakeliste-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'profil-bakeliste', component: BakelisteProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
