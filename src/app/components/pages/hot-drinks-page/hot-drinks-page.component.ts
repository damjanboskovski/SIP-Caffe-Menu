import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-hot-drinks-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './hot-drinks-page.component.html',
  styleUrl: './hot-drinks-page.component.scss'
})
export class HotDrinksPageComponent {

}
