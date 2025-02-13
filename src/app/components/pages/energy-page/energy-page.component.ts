import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-energy-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './energy-page.component.html',
  styleUrl: './energy-page.component.scss'
})
export class EnergyPageComponent {

}
