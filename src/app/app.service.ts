import { Injectable } from '@angular/core';
import {Session} from 'inspector';
import {HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {BasicCssAstVisitor} from 'codelyzer';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  isLoggedIn(bool: boolean) {
    localStorage.setItem('auth', String(bool));
    return bool;
  }

  checkLogin() {
    const auth = localStorage.getItem('auth');
    return JSON.parse(auth);
  }

  loggingOut() {
    if (this.checkLogin()) {
      localStorage.removeItem('auth');
    }
  }

  isAdmin(role) {
    if (role === 'admin') {
      localStorage.setItem('admin', 'true');
    }
  }

  checkAdmin() {
    const admin = localStorage.getItem('admin');
    return JSON.parse(admin);
  }

  edit(bool: boolean) {
    localStorage.setItem('edit', String(bool));
    return bool;
  }

  checkEdit() {
    const edit = localStorage.getItem('edit');
    return JSON.parse(edit);
  }

}


