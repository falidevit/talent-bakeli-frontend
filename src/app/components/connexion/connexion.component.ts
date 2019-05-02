import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  isButtonLoading: boolean = false;
  isValidForm: boolean = true;
  isLoginRequestError: boolean = false;
  isEmailEmpty: boolean = false;
  isPasswordEmpty: boolean = false;
  @Input() userToken;

  data = {
    email: '',
    password: ''
  }

  constructor(
    public UsersServ: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginRecruiter = () => {
    this.isButtonLoading = true;

    if (!this.data.email) {
      this.isButtonLoading = false;
      this.isEmailEmpty = true;
      this.isValidForm = false;
      setTimeout(() => {
        this.isEmailEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }

    if (!this.data.password) {
      this.isButtonLoading = false;
      this.isPasswordEmpty = true;
      this.isValidForm = false;
      setTimeout(() => {
        this.isPasswordEmpty = false;
        this.isValidForm = true;
      }, 5000)
    }

    if (this.isValidForm) {
      this.UsersServ.doLoginRecruiter(this.data).subscribe(
        (data) => {
          this.isButtonLoading = false;
          let user = data;
          if (data["success"] == true) {
            window.sessionStorage.setItem('userToken', user["data"].auth_token);
            window.sessionStorage.setItem('userFullname', user["data"].first_name + ' ' + user["data"].last_name);
            window.sessionStorage.setItem('userStatus', user["data"].status);

            this.userToken = user["data"].auth_token;

            this.router.navigate(['/']);

          } else {
            this.isButtonLoading = false;
            this.isLoginRequestError = true;

            console.log(data)

            setTimeout(() => {
              this.isLoginRequestError = false
            }, 5000)
          }
        },
        (error) => {
          this.isButtonLoading = false;
          this.isLoginRequestError = true;

          console.log(error)

          setTimeout(() => {
            this.isLoginRequestError = false
          }, 5000)
        }
      )
    }
  }

}
