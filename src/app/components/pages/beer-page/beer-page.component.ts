import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-beer-page',
  imports: [
    ProductCardComponent, 
  ],
  templateUrl: './beer-page.component.html',
  styleUrl: './beer-page.component.scss'
})
export class BeerPageComponent {

}
