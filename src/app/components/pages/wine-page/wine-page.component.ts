import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wine-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './wine-page.component.html',
  styleUrl: './wine-page.component.scss'
})
export class WinePageComponent {

}
