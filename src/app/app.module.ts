import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {AppService} from './app.service';
import {AuthenticateService} from './authenticate.service';
import { NewProductComponent } from './new-product/new-product.component';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import {HttpService} from './http.service';
import {GaurdianService} from './gaurdian.service';
import {NgMarqueeModule} from 'ng-marquee';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    NewProductComponent,
    CartComponent,
    MyordersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMarqueeModule
  ],
  providers: [ AppService, AuthenticateService, HttpService, GaurdianService],
  bootstrap: [AppComponent],

})
export class AppModule {

}
