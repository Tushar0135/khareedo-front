import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  private productList: Object = [];
  private category: string;
  private lower: number;
  private higher: number;
  categories = [
    {category: 'Electronics'},
    {category: 'Clothing'},
    {category: 'Shoes'},
    {category: 'Books'}
  ];

  isSpinning = true;

  constructor(private service: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.category = localStorage.getItem('category');
    if (this.category != null) {
      this.service.getAllItems(this.category).subscribe((data) => {
        this.isSpinning = false;
        this.productList = data;
      });
    }
    this.service.eventEmitter.subscribe((category: string) => {
      this.category = category;
      this.service.getAllItems(this.category).subscribe((data) => {
        this.productList = data;
      });
    });
  }

  selectPriceFilter(lower, higher) {
    return this.service.getAllItemsByPrice(this.category.toLowerCase(), lower, higher).subscribe((data) => {
      this.productList = data;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          from: lower,
          to: higher
        },
        queryParamsHandling: 'merge',
      });
      console.log(higher);
    });
  }

  open(id) {
    this.router.navigate([]).then(() => {
      window.open('http://localhost:4200/product-details/?id=' + id, '_blank');
    });
  }

  sendCategory(category) {
    this.category = category;
    localStorage.setItem('category', category.toLowerCase());
    this.service.raiseCategory(category.toLowerCase());
    this.router.navigate(['/product-list', category.toLowerCase()]);
  }
}

