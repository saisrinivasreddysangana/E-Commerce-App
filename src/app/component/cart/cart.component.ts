import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule], 
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];

constructor(private cartService: CartService, private router: Router) {}

ngOnInit(): void {
  this.cartItems = this.cartService.getCartItems();
}


removeItem(name: string) {
  this.cartService.removeItem(name);
  this.cartItems = this.cartService.getCartItems();
}

updateQuantity(productName: string, quantity: number) {
  const item = this.cartItems.find(item => item.name === productName);
  if (item) {
    item.quantity = quantity;
    item.totalPrice = item.price * quantity;
  }
}

getTotalAmount(): number {
  return this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
}

checkout(): void {
  alert('Checkout successful! Lets go to Payment Page.');
  this.cartService.clearCart();
  this.router.navigate(['/payment']);
}


}
