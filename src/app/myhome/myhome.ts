import { Component } from '@angular/core';
import { Slide } from '../slide/slide';
import { ProductCard } from '../product-card/product-card';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-myhome',
  imports: [Slide, RouterLink],
  templateUrl: './myhome.html',
  styleUrl: './myhome.css'
})
export class Myhome {

}
