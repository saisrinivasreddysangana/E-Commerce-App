import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule], 
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];

constructor(private cartService: CartService) {}

ngOnInit() {
  this.cartItems = this.cartService.getCartItems();
}

removeItem(name: string) {
  this.cartService.removeItem(name);
  this.cartItems = this.cartService.getCartItems();
}

updateQuantity(name: string, qty: number) {
  this.cartService.updateQuantity(name, qty);
}

}
