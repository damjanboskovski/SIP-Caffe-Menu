import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-other-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './other-page.component.html',
  styleUrl: './other-page.component.scss'
})
export class OtherPageComponent {

}
