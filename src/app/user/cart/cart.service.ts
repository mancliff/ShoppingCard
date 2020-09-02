import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart =[
    {
      item: 'wxyz-00',
      quantity: '1',
      price: '54.00'
    },
    {
      item: 'wxyz-01',
      quantity: '3',
      price: '250.00'
    },
    {
      item: 'wxyz-02',
      quantity: '5',
      price: '103.00'
    },
    {
      item: 'wxyz-03',
      quantity: '2',
      price: '16.99'
    }
  ];
  constructor() { }
  
  removeItem(index){
    
    this.cart.splice(index,1);
 }
  
}
