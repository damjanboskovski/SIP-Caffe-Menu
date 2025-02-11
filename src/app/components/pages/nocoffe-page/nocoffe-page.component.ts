import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-nocoffe-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './nocoffe-page.component.html',
  styleUrl: './nocoffe-page.component.scss'
})
export class NocoffePageComponent {

}
