import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCartItems() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8080/cart/addproduct/receive/', {headers});
  }

  increaseQuantity(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/add/?id=' + id, null, {headers});
  }

  decreaseQuantity(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/reduce/?id=' + id, null, {headers});
  }

  removeItemFromCart(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/remove/?id=' + id, null, {headers});
  }

  cartTotal() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/total', {headers});
  }

  addToCart(id: number) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/add/?id=' + id, null, {headers});
  }

  checkout() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/checkout', null, {headers});
  }

  getOrders() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/orders', {headers});
  }

  getProfile() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/user/profile', {headers});
  }

  updateProfile(user) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    localStorage.setItem('token', btoa(user.email + ':' + user.password));
    return this.http.put('http://localhost:8081/user/update-profile', user, {headers});
  }

  addProduct(item) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/admin/add-item', item, {headers});
  }

  removeItem(productId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.delete('http://localhost:8081/admin/remove-item/?id=' + productId, {headers});
  }

  getItemById(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/admin/get-item/?id=' + id, {headers});
  }

  editItem(id, item) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.put('http://localhost:8081/admin/edit-item/?id=' + id, item, {headers});
  }

  geUsers() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/admin/get-users', {headers});
  }

  deleteUser(userId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.delete('http://localhost:8081/admin/remove-user/?id=' + userId, {headers});
  }

  getUser(userId) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/admin/get-user/?id=' + userId, {headers});
  }

  editUser(id: any, user) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.put('http://localhost:8081/admin/edit-user/?id=' + id, user, {headers});
  }
}
