import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users/users.service';

@Component({
  selector: 'app-inscription-recruteur',
  templateUrl: './inscription-recruteur.component.html',
  styleUrls: ['./inscription-recruteur.component.css']
})
export class InscriptionRecruteurComponent implements OnInit {

  isPasswordError: boolean = false;
  isButtonLoading: boolean = false;
  isSuccessRegister: boolean = false;
  isRegisterError: boolean = false;
  isValidForm: boolean = true;

  constructor(
    public UsersServ: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  data = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    recruiter_raison_sociale: '',
    recruiter_domaine_pro: ''
  }

  ngOnInit() {
  }

  onRegisterRecruiter = () => {
    console.log(this.data)
    this.isButtonLoading = true;

    if(this.data.password !== this.data.confirmPassword){
      this.isPasswordError = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isPasswordError = false
      }, 5000);
    }

    if(this.isValidForm){
      this.UsersServ.doRegisterRecruiter(this.data).subscribe(
        (res) => {
          this.isButtonLoading = false;
          this.isSuccessRegister = true;
          var user = res;
          window.sessionStorage.setItem('userToken', user["auth_token"]);
          window.sessionStorage.setItem('userFullname', user["first_name"] + ' ' + user["last_name"]);
          window.sessionStorage.setItem('userStatus', user["status"]);
        },
        (error) => {
          this.isButtonLoading = false;
          this.isRegisterError = true;
        });
    }
  }

}
