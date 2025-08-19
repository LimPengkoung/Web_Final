import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../service/cart-service';


@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {


  cart_item: any[] = [];
  isLoggedIn = false;
  userName = '';
  searchTerm = '';

  constructor(private router: Router, public cartService: CartService) {

    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      this.userName = localStorage.getItem('user') || 'User';
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } });
    }
  }
}
