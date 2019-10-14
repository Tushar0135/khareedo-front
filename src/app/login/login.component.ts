import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticateService} from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password;
  email;
  constructor(private service: AppService, private router: Router, private authservice: AuthenticateService) { }

  ngOnInit() {
    if (this.service.checklogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    this.authservice.authenticate(this.email, this.password).subscribe(data => {
      this.service.isLoggedIn(true);
      this.router.navigate(['home']);
    });
  }
  logout() {
    this.service.isLoggedIn(false);
  }
}
