import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  isLoggedIn(value: boolean) {
    sessionStorage.setItem('auth', String(value));
    return value;
  }

  checklogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

}

