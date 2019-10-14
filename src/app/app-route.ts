import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
export const MAIN_ROUTES: Routes = [
  {
    path : '' , redirectTo : 'home', pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'user',
    component: UserCartComponent,
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent,
  },

  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: 'Mycart',
    component: UserCartComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'myprofile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: HomePageComponent,
  }
];
