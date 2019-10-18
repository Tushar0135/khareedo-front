import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private id;
  private item: object;

  constructor(private route: ActivatedRoute, private service: HttpService, private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
        // tslint:disable-next-line:radix
        this.id = params.get('id');
        this.service.getById(this.id).subscribe((data) => {
          this.item = data;
          console.log(this.item);
        });
      }
    );
  }

  split(description) {
    return description.split('\\n');
  }

  addToCart(id: number) {
    if (this.appService.checkLogin()) {
      this.service.addToCart(id).subscribe((data) => {
        localStorage.setItem('path', '/cart');
        window.alert('Product Sent To Cart');
        this.router.navigate(['/cart']);
      });
    } else {
      window.alert('Please Login');
      this.router.navigate(['/login']);
    }
  }

  remove(productId: any, category: any) {
    this.service.removeItem(productId).subscribe((data) => {
      window.alert('Product Removed');
      this.router.navigate(['/product-list', category]);
    });
  }

  edit(productId: any) {
    this.appService.edit(true);
    this.router.navigate(['/edit-product'], {
      relativeTo: this.route,
      queryParams: {
        id: productId
      }
    });
  }
}

