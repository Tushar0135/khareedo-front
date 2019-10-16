import { Component, OnInit } from '@angular/core';
import {Router, Routes} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories = [
    {category: 'Electronics'},
    {category: 'Clothing'},
    {category: 'Shoes'},
    {category: 'Books'}
  ];
  private category: any;
  private productList;

  constructor(private httpService: HttpService, private router: Router) {
  }


  ngOnInit() {
    this.httpService.getAllItemsonHome().subscribe((data) => {
      this.productList = data;
    });
  }

  sendCategory(category) {
    this.category = category;
    localStorage.setItem('category', category.toLowerCase());
    this.httpService.raiseCategory(category.toLowerCase());
    this.router.navigate(['/product-list/' + category.toLowerCase()]);
  }
  open(id) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/product-details/?id=' + id, '_blank');
    });
  }
}

