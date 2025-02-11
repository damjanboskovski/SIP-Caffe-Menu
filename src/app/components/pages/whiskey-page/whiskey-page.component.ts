import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-whiskey-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './whiskey-page.component.html',
  styleUrl: './whiskey-page.component.scss'
})
export class WhiskeyPageComponent {

}
