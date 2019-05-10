import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-cv-model-bakeli',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './cv-model-bakeli.component.html',
  styleUrls: ['./cv-model-bakeli.component.css']
})
export class CvModelBakeliComponent implements OnInit {

  location: Location;

  constructor(location: Location) { 
    this.location = location; 
  }

  ngOnInit() {
  }

  goBackHome(){
    this.location.back();
  }

}
