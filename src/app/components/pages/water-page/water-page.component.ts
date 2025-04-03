import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-water-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './water-page.component.html',
  styleUrl: './water-page.component.scss'
})
export class WaterPageComponent {

}
