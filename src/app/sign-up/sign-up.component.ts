import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  private name;
  private email;
  private password;

  constructor(private authService: AuthenticateService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUp({
      email: this.email,
      password: this.password,
      name: this.name
    }).subscribe(
      data => {
        this.router.navigate(['login']);
      });
  }
}
