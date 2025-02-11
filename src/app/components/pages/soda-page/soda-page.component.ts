import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-soda-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './soda-page.component.html',
  styleUrl: './soda-page.component.scss'
})
export class SodaPageComponent {

}
