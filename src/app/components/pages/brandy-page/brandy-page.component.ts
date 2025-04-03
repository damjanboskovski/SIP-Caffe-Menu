import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brandy-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './brandy-page.component.html',
  styleUrl: './brandy-page.component.scss'
})
export class BrandyPageComponent {

}
