import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakeliste-profile',
  templateUrl: './bakeliste-profile.component.html',
  styleUrls: ['./bakeliste-profile.component.css']
})
export class BakelisteProfileComponent implements OnInit {
  isHomeSectionActive: boolean = true;
  isAboutSectionActive: boolean = false;
  isResumeSectionActive: boolean = false;
  isServiceSectionActive: boolean = false;
  isPortfolioSectionActive: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onSwitchHomeSection(){
    if(this.isHomeSectionActive == false){
      this.isHomeSectionActive = true;
      this.isAboutSectionActive = false;
      this.isResumeSectionActive = false;
      this.isServiceSectionActive = false;
      this.isPortfolioSectionActive = false;
    }
  }

  onSwitchAboutSection(){
    if(this.isAboutSectionActive == false){
      this.isHomeSectionActive = false;
      this.isAboutSectionActive = true;
      this.isResumeSectionActive = false;
      this.isServiceSectionActive = false;
      this.isPortfolioSectionActive = false;
    }
  }

  onSwitchResumeSection(){
    if(this.isResumeSectionActive == false){
      this.isHomeSectionActive = false;
      this.isAboutSectionActive = false;
      this.isResumeSectionActive = true;
      this.isServiceSectionActive = false;
      this.isPortfolioSectionActive = false;
    }
  }

  onSwitchServiceSection(){
    if(this.isServiceSectionActive == false){
      this.isHomeSectionActive = false;
      this.isAboutSectionActive = false;
      this.isResumeSectionActive = false;
      this.isServiceSectionActive = true;
      this.isPortfolioSectionActive = false;
    }
  }

  onSwitchPortfolioSection(){
    if(this.isAboutSectionActive == false){
      this.isHomeSectionActive = false;
      this.isAboutSectionActive = false;
      this.isResumeSectionActive = false;
      this.isServiceSectionActive = false;
      this.isPortfolioSectionActive = true;
    }
  }

  


}
