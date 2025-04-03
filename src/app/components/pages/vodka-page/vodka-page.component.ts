import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vodka-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './vodka-page.component.html',
  styleUrl: './vodka-page.component.scss'
})
export class VodkaPageComponent {

}
