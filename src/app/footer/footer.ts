import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
    currentYear = new Date().getFullYear();
    email: string = '';
  subscribed = false;

  subscribeEmail() {
    if (this.email) {
      console.log('Subscribed email:', this.email);
      this.subscribed = true;
      this.email = '';

      // You can integrate your API call here if needed
    }
  }
}
