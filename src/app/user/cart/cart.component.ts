import { Component, OnInit, Inject } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart = [];
  index:any;
  remove: void;
  constructor(private cart: CartService) {
     
    this.shoppingCart = this.cart.cart;
    
  }
RemoveItem(){
  this.remove = this.cart.removeItem(this.index);
}

  ngOnInit(): void {
  }

}
