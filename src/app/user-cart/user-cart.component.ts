import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  private items: Object = [];
  private totalPrice;
  private isDisabled: boolean;

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.service.getCartItems().subscribe((data) => {
      this.items = data;
    });
    this.service.cartTotal().subscribe((data) => {
      this.totalPrice = data;
    });
  }

  increment(id) {
    this.isDisabled = false;
    this.service.increaseQuantity(id).subscribe(
      (data) => {
        this.items = data;
        this.service.cartTotal().subscribe((total) => {
          this.totalPrice = total;
        });
      }
    );
  }

  decrement(id, quantity) {
    if (quantity === 1) {
      this.isDisabled = true;
    } else {
      this.service.decreaseQuantity(id).subscribe(
        (data) => {
          this.items = data;
          this.service.cartTotal().subscribe((total) => {
            this.totalPrice = total;
          });
        }
      );
    }
  }

  remove(id) {
    this.service.removeItemFromCart(id).subscribe(
      (data) => {
        this.items = data;
        this.service.cartTotal().subscribe((total) => {
          this.totalPrice = total;
        });
      }
    );
  }

  checkout() {
    return this.service.checkout().subscribe((data) => {
      this.router.navigate(['order-history']);
    });
  }

  redirect(id) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/product-details/?id=' + id, '_blank');
    });
  }
}
