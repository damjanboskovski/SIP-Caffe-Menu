import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desserts-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './desserts-page.component.html',
  styleUrl: './desserts-page.component.scss'
})
export class DessertsPageComponent {

}
