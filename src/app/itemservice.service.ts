import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  constructor(private httpClient: HttpClient) {
  }
  getdetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8080/product/get_details', {headers});
  }
  getcategory(type) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8080/product/productcategory/' + type, { headers});
  }
  getpricebtw(number1 , number2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8080/product/' + number1 + '/' + number2, {headers});
  }
  getpricebtwandcategory(number1 , number2, category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get('http://localhost:8080/product/' + number1 + '/' + number2 + '/' + category, {headers});
  }
  goToDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8080/product/productdetails/' + id, {headers});
  }
}
