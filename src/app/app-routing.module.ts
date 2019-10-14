import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAIN_ROUTES} from './app-route';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
