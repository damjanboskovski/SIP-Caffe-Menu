import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tequila-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './tequila-page.html',
  styleUrl: './tequila-page.scss',
})
export class TequilaPageComponent {

}
