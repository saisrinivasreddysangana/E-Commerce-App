import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure standalone is set
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]  // Import RouterOutlet here
})
export class AppComponent {
  title = 'Ecommerce-App';
}
