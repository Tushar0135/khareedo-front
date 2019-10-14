import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export class User {
  constructor(
    public status: string,
  ) { }

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient, private route: Router) { }

  authenticate(firstname, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(firstname + ':' + password) });
    return this.httpClient.get('http://localhost:8080/users/get1', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('token', btoa(firstname + ':' + password));
        }
      )

    );
  }

  // sendnewuser(d) {
  //   return this.httpClient.post('http://localhost:8080/users/Signup', d).subscribe((data) => {
  //     this.route.navigate(['/userlogin']);
  //
  //   });
  // }
isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('firstname');
  }
}
