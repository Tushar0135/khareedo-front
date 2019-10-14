import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemserviceService} from '../itemservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId;
  Details;

  constructor(private activatedRoute: ActivatedRoute, private service: ItemserviceService) { }
  // tslint:disable-next-line:max-line-length
  private list: {name: string, price: number, details: string, image: string, category: string, sub_category: string, active: number, itemDetails: string, productId: number};
  ngOnInit() {
    this.service.getdetails().subscribe((data) => {
      this.Details = data;

      this.activatedRoute.queryParams.subscribe(params => {
        this.productId = params.id;
        this.list = this.alldetails(this.productId);
      });
    });
  }
  alldetails(productId) {
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < this.Details.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.Details[i].productId == productId) {
        return this.Details[i];
      }
    }
  }
}
