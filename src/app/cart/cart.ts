import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { RouterEvent, RouterLink, } from '@angular/router';



@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {

  }
}
