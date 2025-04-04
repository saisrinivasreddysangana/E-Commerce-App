import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';

const routes: Routes = [
  { path: '', component: ProductViewComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)  
  ],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
