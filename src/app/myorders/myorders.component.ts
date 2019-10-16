import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  private myorders: object = [];

  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getOrders().subscribe((data) => {
      this.myorders = data;
    });
  }

}

