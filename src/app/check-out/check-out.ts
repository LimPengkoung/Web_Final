import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ToKHRPipe } from '../custom-pipes/to-khr-pipe';
declare const Swal: any

@Component({
  selector: 'app-check-out',
  imports: [CurrencyPipe, NgFor, ToKHRPipe],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut {
  selectedItems: any[] = [];
  total: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.selectedItems = this.cartService.getSelectedItems();
    this.total = this.selectedItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  placeOrder() {
    Swal.fire({
      title: "Confirm Order?",
      text: "Do you want to buy this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order Placed!",
          text: "Your order has been successfully payment.",
          icon: "success"
        });

      }
    });
  }


}
