import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cocktails-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './cocktails-page.component.html',
  styleUrl: './cocktails-page.component.scss'
})
export class CocktailsPageComponent {

}
