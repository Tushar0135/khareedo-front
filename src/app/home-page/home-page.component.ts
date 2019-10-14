import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  category;
  Names;
  constructor(private router: Router, private service: AppService, private http: ItemserviceService) { }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getdetails().subscribe((data) => {
      this.Names = data;
    });
  }


  showcategory(cat) {
    this.category = cat;
    // @ts-ignore
    this.router.navigate(['cat']);
    this.http.getcategory(cat).subscribe((data3) => {
      this.Names = data3;
    });
  }

  handleSelectedevent($even, number1, number2) {
    if (this.category == null) {
      this.http.getpricebtw(number1 , number2).subscribe((data) => {
        this.Names = data;
      });
    } else {
      this.http.getpricebtwandcategory(this.category, number1 , number2).subscribe((data) => {
        this.Names = data;
      });
    }
  }}
