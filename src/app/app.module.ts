import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InscriptionRecruteurComponent } from './components/inscription-recruteur/inscription-recruteur.component';
=======
import { HomepageComponent } from './components/homepage/homepage.component';
>>>>>>> 27469e0f875d8c4e85e54aa434766ea453e51781

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InscriptionRecruteurComponent
=======
    HomepageComponent
>>>>>>> 27469e0f875d8c4e85e54aa434766ea453e51781
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
