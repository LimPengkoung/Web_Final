import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart-service';
import { ToKHRPipe } from '../custom-pipes/to-khr-pipe';


declare const axios: any
declare const $: any

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, ToKHRPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }


  product: any = {}
  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    let ng_this = this;

    axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function (response: any) {


        ng_this.product = response.data;
        console.log(ng_this.product)

      })
      .catch(function (error: any) {
        console.log(error);
      })

  }
  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);

    }
  }
}
