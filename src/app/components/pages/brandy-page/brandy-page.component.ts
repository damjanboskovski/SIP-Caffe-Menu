import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-brandy-page',
  imports: [
    ProductCardComponent
  ],
  templateUrl: './brandy-page.component.html',
  styleUrl: './brandy-page.component.scss'
})
export class BrandyPageComponent {

}
