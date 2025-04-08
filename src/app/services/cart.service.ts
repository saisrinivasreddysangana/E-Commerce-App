import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { name: string, price: number, quantity: number }[] = [];

  // Get all cart items
  getCartItems() {
    return this.cart;
  }

  // Get total item count (sum of all quantities)
  getCartItemCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Add item to cart
  addToCart(product: { name: string; price: number }): void {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  // Remove an item by name
  removeItem(productName: string) {
    this.cart = this.cart.filter(item => item.name !== productName);
  }

  // Clear the entire cart
  clearCart() {
    this.cart = [];
  }

  // Update quantity of an item
  updateQuantity(productName: string, quantity: number) {
    const item = this.cart.find(item => item.name === productName);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(productName);
      }
    }
  }
}
