import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';
  name: string = '';

  constructor(private router: Router) {}

  submitPayment(form: NgForm) {
    if (form.valid) {
      // Proceed to success page
      alert('Payment successful!');
      this.router.navigate(['/checkout-success']);
    }
}
}
