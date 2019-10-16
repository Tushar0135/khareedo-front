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
  username;
  password;
  invalidLogin = false;

  constructor(private router: Router, private service: AppService, private authService: AuthenticateService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      (data) => {
        this.service.isLoggedIn(true);
        this.invalidLogin = false;
        if (localStorage.getItem('path') === null) {
          this.router.navigate(['/home']);
        } else {
          const path = localStorage.getItem('path');
          localStorage.removeItem('path');
          this.router.navigate([path]);
        }
      }, (error) => {
        this.invalidLogin = true;
      }
    );
  }
}

