import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [LoginComponent, CartComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatTableModule
    

  ]
})
export class UserModule { }
