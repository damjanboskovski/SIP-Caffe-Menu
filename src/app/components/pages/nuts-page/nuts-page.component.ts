import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-nuts-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './nuts-page.component.html',
  styleUrl: './nuts-page.component.scss'
})
export class NutsPageComponent {

}
