import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,  // Import standalone component
    ProductViewComponent  // Import standalone component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
