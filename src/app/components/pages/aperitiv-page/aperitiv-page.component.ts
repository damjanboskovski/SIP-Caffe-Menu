import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aperitiv-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './aperitiv-page.component.html',
  styleUrl: './aperitiv-page.component.scss'
})
export class AperitivPageComponent {

}
