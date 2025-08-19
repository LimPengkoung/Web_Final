import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToKHRPipe } from "../custom-pipes/to-khr-pipe";
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ToKHRPipe, CurrencyPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;
  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();

  addToCart(product: any): void {
    this.onAddToCart.emit(product);
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }

    if (halfStar) {
      stars.push('half');
    }

    while (stars.length < totalStars) {
      stars.push('empty');
    }

    return stars;
  }

  getRatingClass(rating: number): string {
    if (rating >= 4.5) {
      return 'text-success';
    } else if (rating >= 3) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }
}