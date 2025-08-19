import { Component } from '@angular/core';
import { Slide } from '../slide/slide';
import { ProductService } from '../service/product-service';
import { CartService } from '../service/cart-service';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  constructor(public cartService: CartService, public productService: ProductService) {

  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);


  }
}
