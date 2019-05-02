import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users/users.service';

@Component({
  selector: 'app-inscription-recruteur',
  templateUrl: './inscription-recruteur.component.html',
  styleUrls: ['./inscription-recruteur.component.css']
})
export class InscriptionRecruteurComponent implements OnInit {

  isFirstNameEmpty: boolean = false;
  isLastNameEmpty: boolean = false;
  isEmailEmpty: boolean = false;
  isPhoneEmpty: boolean = false;
  isPasswordEmpty: boolean = false;
  isRepeatPasswordEmpty: boolean = false;
  isRecruiterRSEmpty: boolean = false;
  isRecruiterDPEmpty: boolean = false;
  isPasswordError: boolean = false;
  emailIsExist: boolean = false;
  isButtonLoading: boolean = false;
  isSuccessRegister: boolean = false;
  isRegisterError: boolean = false;
  isValidForm: boolean = true;
  checked: boolean = false;
  showRequiredFieldAlert: boolean = true;

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

    if(!this.data.first_name){
      this.isFirstNameEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isFirstNameEmpty = false;
      }, 5000)
    }

    if(!this.data.last_name){
      this.isLastNameEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isLastNameEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }

    if(!this.data.email){
      this.isEmailEmpty = true;
      
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isEmailEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }else{ 
      this.checked = true;
    }

    if(!this.data.phone){
      this.isPhoneEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isPhoneEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }
    if(!this.data.password){
      this.isPasswordEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isPasswordEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }
    if(!this.data.confirmPassword){
      this.isRepeatPasswordEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isRepeatPasswordEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }
    if(this.data.password && this.data.confirmPassword){
      if(this.data.password !== this.data.confirmPassword){
        this.isPasswordError = true;
        this.isValidForm = false;
        this.isButtonLoading = false;
        setTimeout(() => {
          this.isPasswordError = false,
          this.isValidForm = true;
        }, 5000);
      }
    }
    if(!this.data.recruiter_raison_sociale){
      this.isRecruiterRSEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isRecruiterRSEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }
    if(!this.data.recruiter_domaine_pro){
      this.isRecruiterDPEmpty = true;
      this.isValidForm = false;
      this.isButtonLoading = false;
      setTimeout(() => {
        this.isRecruiterDPEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }
    console.log('avant')

    if(this.isValidForm){
      console.log('aprés')
      if(this.checked == true){
        this.UsersServ.checkingExistingEmail(this.data.email).subscribe((data) => {
          console.log(data);
          if(data.exist == true){
            this.emailIsExist = true;
            this.isValidForm = false;
            this.isButtonLoading = false;
            setTimeout(() => {
              this.emailIsExist = false;
              this.data.email = '';
              this.isValidForm = true;
            }, 5000)
          }else{
            this.UsersServ.doRegisterRecruiter(this.data).subscribe(
              (res) => {
                this.isButtonLoading = false;
                this.isSuccessRegister = true;
                this.showRequiredFieldAlert = false;
                this.data = {
                  first_name: '',
                  last_name: '',
                  email: '',
                  phone: '',
                  password: '',
                  confirmPassword: '',
                  recruiter_raison_sociale: '',
                  recruiter_domaine_pro: ''
                }
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
        })
      }
    }
  }

}
