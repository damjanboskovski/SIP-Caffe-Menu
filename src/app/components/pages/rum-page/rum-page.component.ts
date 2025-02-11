import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-rum-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './rum-page.component.html',
  styleUrl: './rum-page.component.scss'
})
export class RumPageComponent {

}
