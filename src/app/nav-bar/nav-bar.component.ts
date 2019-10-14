import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private service: AppService) {
  }

  ngOnInit() {
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }
  mycart() {
    if (this.service.checklogin()) {
      this.router.navigate(['/Mycart']);
    }
  }

}


