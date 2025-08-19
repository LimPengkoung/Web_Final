import { Injectable } from '@angular/core';
declare const axios: any
declare const $: any

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

    let ng_this = this;
    $.LoadingOverlay("show");
    axios.get('https://fakestoreapi.com/products')
      .then(function (response: any) {
        // handle success
        console.log(response.data);
        ng_this.products = response.data;
        $.LoadingOverlay("hide");
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  private products: any[] = []

  getProduct() {
    return this.products;
  }
}
