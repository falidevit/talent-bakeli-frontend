import { Component, OnInit } from '@angular/core';
import { CvthequeService } from './../../services/cvtheque/cvtheque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage-v2',
  templateUrl: './homepage-v2.component.html',
  styleUrls: ['./homepage-v2.component.css']
})
export class HomepageV2Component implements OnInit {

  cvtheque: any;

  constructor(
    public cvthequeServ: CvthequeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.onGetCvthequeData();
  }

  onGetCvthequeData = () => {
    this.cvtheque = [];
    this.cvthequeServ.onGetCvthequesData().subscribe((data) => {
      console.log(data);
      this.cvtheque = data.cvthequeData;
    })
  }

}
