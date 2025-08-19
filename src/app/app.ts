import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { CartService } from './service/cart-service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public cartservice: CartService) {

  }

  products: any;


}
