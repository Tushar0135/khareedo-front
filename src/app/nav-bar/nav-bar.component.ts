import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticateService} from '../authenticate.service';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private search: any;
  constructor(private router: Router, private authService: AuthenticateService, private httpService: HttpService,
              private service: AppService) {
  }

  ngOnInit() {
  }

  signOut() {
    this.authService.signOut().subscribe(data => {
      this.service.loggingOut();
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      window.alert('Logout Succesfull');
      this.router.navigate(['/home']);
    });
  }


  orders() {
    if (!this.service.checkLogin()) {
      localStorage.setItem('path', '/order-history');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/order-history']);

    }
  }

  cart() {
    if (!this.service.checkLogin()) {
      localStorage.setItem('path', '/cart');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/cart']);

    }
  }

  addPro() {
    this.service.edit(false);
    this.router.navigate(['add-product']);
  }


}
