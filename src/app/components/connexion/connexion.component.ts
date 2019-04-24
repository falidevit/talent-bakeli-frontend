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
  isValidForm: boolean = false;
  isLoginRequestError: boolean = false;
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

    this.UsersServ.doLoginRecruiter(this.data).subscribe(
      (data) => {
        this.isButtonLoading = false;
        var user = data;
        window.sessionStorage.setItem('userToken', user["auth_token"]);
        window.sessionStorage.setItem('userFullname', user["first_name"] + ' ' + user["last_name"]);
        window.sessionStorage.setItem('userStatus', user["status"]);

        this.router.navigate(['/']);
      },
      (error) => {
        this.isButtonLoading = false;
        this.isLoginRequestError = true;

        setTimeout(() => {
          this.isLoginRequestError = false
        }, 5000)
      }
    )
  }

}
