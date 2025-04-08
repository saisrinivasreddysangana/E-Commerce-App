import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // adjust path if needed
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  cartItemCount: number = 0;

  products = [
    { name: 'iPhone 16e', price: 59900 },
    { name: 'iPhone 16', price: 74900 },
    { name: 'iPhone 16 Plus', price: 84900 },
    { name: 'iPhone 16 Pro', price: 112900 },
    { name: 'iPhone 15', price: 69900 },
    { name: 'iPhone 15 Plus', price: 79900 },
    { name: 'iPhone 15 Pro', price: 129900 },
    { name: 'iPhone 15 Pro Max', price: 159900 }
  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService 
    ) {}

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.cartItemCount = this.cartService.getCartItemCount();
    alert(`${product.name} added to cart!`);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
