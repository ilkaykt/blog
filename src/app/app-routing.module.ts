import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import {SigninComponent} from "./signin/signin.component";

const routes: Routes=[
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"anasayfa",
        component:HomeComponent,
      },
      {
        path:"hakkimizda",
        component:AboutMeComponent
      },
      {
        path:"iletisim",
        component:ContactComponent
      },
      {
        path:"kayitol",
        component:SigninComponent
      }


    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent
  }



];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
