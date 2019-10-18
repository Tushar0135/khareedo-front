import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  private name: any;
  private category: any;
  private subCategory: any;
  private details: any;
  private image: any;
  private price: any;
  private id: any;
  private item;

  constructor(private service: HttpService, private router: Router, private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.appService.checkEdit()) {
      this.route.queryParamMap.subscribe((params) => {
        this.id = params.get('id');
        this.service.getItemById(this.id).subscribe((data) => {
          this.item = data;
          this.name = this.item.name;
          this.category = this.item.category;
          this.subCategory = this.item.subCategory;
          this.details = this.item.details;
          this.image = this.item.image;
          this.price = this.item.price;
        });
      });
    }
  }

  add() {
    this.service.addProduct({
      name: this.name,
      category: this.category,
      subCategory: this.subCategory,
      details: this.details,
      image: this.image,
      price: this.price
    }).subscribe(() => {
      window.alert('Prouct Added Succesfully');
      this.router.navigate(['/product-list', this.category]);
    });
  }

  edit() {
    this.service.editItem(this.id, {
      name: this.name,
      category: this.category,
      subCategory: this.subCategory,
      details: this.details,
      image: this.image,
      price: this.price
    }).subscribe((data) => {
      localStorage.removeItem('edit');
      window.alert('Prouct Updated Succesfully');
      this.router.navigate(['product-details'], {
        queryParams: {
          id: this.id
        }
      });
    });
  }
}
