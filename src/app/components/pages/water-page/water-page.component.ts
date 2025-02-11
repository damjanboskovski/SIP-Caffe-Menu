import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-water-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './water-page.component.html',
  styleUrl: './water-page.component.scss'
})
export class WaterPageComponent {

}
