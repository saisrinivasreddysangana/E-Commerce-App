import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for *ngIf
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  products = [
    {
      id: 'iphone13',
      name: 'iPhone 13 Green 128GB',
      price: 100,
      description: 'A powerful smartphone with an A15 Bionic chip and a stunning display.',
      image: 'https://m.media-amazon.com/images/I/61-r9zOKBCL.jpg'
    },
    {
      id: 'iphone15',
      name: 'iPhone 15 256GB',
      price: 120,
      description: 'The latest iPhone with A16 Bionic chip and improved battery life.',
      image: 'https://m.media-amazon.com/images/I/71y2b8hAX0L._AC_SL1500_.jpg'
    }
  ];

  selectedProductId: string | null = null;

  viewDetails(productId: string) {
    this.selectedProductId = this.selectedProductId === productId ? null : productId;
  }
}
