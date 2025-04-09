import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  getCartItems() {
    return this.cart.map(item => ({
      ...item,
      total: item.quantity * item.price
    }));
  }
  

  getCartItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  addToCart(product: any): void {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        totalPrice: product.price
      });
    }
  }
    

  removeItem(productName: string) {
    this.cart = this.cart.filter(item => item.name !== productName);
  }

  clearCart() {
    this.cart = [];
  }

  updateQuantity(productName: string, quantity: number) {
    const item = this.cart.find(item => item.name === productName);
    if (item) {
      item.quantity = quantity;
      item.totalPrice = item.price * quantity;
    }
  }
  
}
