import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-cognac-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './cognac-page.component.html',
  styleUrl: './cognac-page.component.scss'
})
export class CognacPageComponent {

}
