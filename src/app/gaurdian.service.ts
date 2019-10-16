import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AppService} from './app.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaurdianService  implements CanActivate {

  constructor(private appService: AppService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.appService.checkLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
