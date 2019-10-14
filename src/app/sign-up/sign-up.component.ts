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


  constructor(private service: AuthenticateService, private http: HttpClient, private router: Router) {
  }



  password;

  url = 'http://localhost:8080/users/Signup';
  email;

  ngOnInit() {
  }

  userData() {
    const ar = {email: this.email,  password: this.password};
    this.http.post(this.url, ar).subscribe(data => {
      this.router.navigate(['/userlogin']);
    });
  }

}
