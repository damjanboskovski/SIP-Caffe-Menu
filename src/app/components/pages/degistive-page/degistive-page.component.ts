import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-degistive-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './degistive-page.component.html',
  styleUrl: './degistive-page.component.scss'
})
export class DegistivePageComponent {

}
