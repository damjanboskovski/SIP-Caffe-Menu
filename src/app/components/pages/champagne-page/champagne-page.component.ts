import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-champagne-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './champagne-page.component.html',
  styleUrl: './champagne-page.component.scss'
})
export class ChampagnePageComponent {

}
