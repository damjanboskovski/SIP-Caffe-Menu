import { Component } from '@angular/core';
import { NonalcoholicCardComponent } from '../../ui/nonalcoholic-card/nonalcoholic-card.component';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-coffe-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './coffe-page.component.html',
  styleUrl: './coffe-page.component.scss'
})
export class CoffePageComponent {

}
