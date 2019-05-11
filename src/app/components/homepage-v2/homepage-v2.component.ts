import { Component, OnInit } from '@angular/core';
import { CvthequeService } from './../../services/cvtheque/cvtheque.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
// import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-homepage-v2',
  templateUrl: './homepage-v2.component.html',
  styleUrls: ['./homepage-v2.component.css']
})
export class HomepageV2Component implements OnInit {

  cvtheque: any;
  cvID: 0;

  constructor(
    public cvthequeServ: CvthequeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.hidden').css('display', 'none');
      $("#filter button").each(function () {
        $(this).on("click", function () {
          var filter = $(this).prop('class');

          if ($(this).attr('class') == 'all') {
            $('.hidden').contents().appendTo('#posts').hide().show('slow');
            $("#filter button").removeClass('active');
            $(this).addClass('active');
            $("#filter button").prop("disabled", false);
            $(this).prop("disabled", true);
          }
          else {
            $('.post').appendTo('.hidden');
            $('.hidden').contents().appendTo('#posts').hide().show('slow');
            $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
            $("#filter button").removeClass('active');
            $(this).addClass('active');
            $("#filter button").prop("disabled", false);
            $(this).prop("disabled", true);
          };

        });

      });

    });
    this.onGetCvthequeData();
    
  }

  onGetCvthequeData = () => {
    this.cvtheque = [];
    this.cvthequeServ.onGetCvthequesData().subscribe((data) => {
      console.log(data);
      this.cvtheque = data.cvthequeData;
    })
  }

  onGetCvInfos = (id) => {
    this.cvID = id;
      // $('#hireModal').modal('show')
  }

}
