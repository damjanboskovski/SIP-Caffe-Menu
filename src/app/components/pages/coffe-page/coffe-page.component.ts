import { Component } from '@angular/core';
import { NonalcoholicCardComponent } from '../../ui/nonalcoholic-card/nonalcoholic-card.component';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-coffe-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './coffe-page.component.html',
  styleUrl: './coffe-page.component.scss'
})
export class CoffePageComponent {

}
