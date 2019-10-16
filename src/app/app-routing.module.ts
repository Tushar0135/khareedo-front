import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {CartComponent} from './cart/cart.component';
import {ProfileComponent} from './profile/profile.component';
import {NewProductComponent} from './new-product/new-product.component';
import {MyordersComponent} from './myorders/myorders.component';
import {ProductListComponent} from './product-list/product-list.component';
import {GaurdianService} from './gaurdian.service';

let routes: Routes;
routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent, canActivate: [GaurdianService]},
  {path: 'profile', component: ProfileComponent, canActivate: [GaurdianService]},
  {path: 'order-history', component: MyordersComponent, canActivate: [GaurdianService]},
  {path: 'add-product', component: NewProductComponent, canActivate: [GaurdianService]},
  {path: 'edit-product', component: NewProductComponent, canActivate: [GaurdianService]},
  {path: 'product-list/:category', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomePageComponent, LoginComponent, SignUpComponent, ProductListComponent, ProductDetailsComponent,
  CartComponent, MyordersComponent, ProfileComponent];
