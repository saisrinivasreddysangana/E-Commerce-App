import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductViewComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  {
    path: 'payment',
    loadComponent: () =>
      import('./component/payment/payment.component').then((m) => m.PaymentComponent),
  },
  {
    path: 'checkout-success',
    loadComponent: () =>
      import('./component/checkout-success/checkout-success.component').then((m) => m.CheckoutSuccessComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
