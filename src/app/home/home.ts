import { Component } from '@angular/core';
import { Slide } from "../slide/slide";
import { ProductCard } from "../product-card/product-card";
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Slide, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public productService: ProductService) {

  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);


  }









}
