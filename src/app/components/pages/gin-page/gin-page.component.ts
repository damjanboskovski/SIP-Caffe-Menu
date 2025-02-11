import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-gin-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './gin-page.component.html',
  styleUrl: './gin-page.component.scss'
})
export class GinPageComponent {

}
