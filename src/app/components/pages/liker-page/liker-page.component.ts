import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-liker-page',
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './liker-page.component.html',
  styleUrl: './liker-page.component.scss'
})
export class LikerPageComponent {

}
