import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-vodka-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './vodka-page.component.html',
  styleUrl: './vodka-page.component.scss'
})
export class VodkaPageComponent {

}
