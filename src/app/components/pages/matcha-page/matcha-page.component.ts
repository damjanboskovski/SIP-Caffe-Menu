import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-matcha-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './matcha-page.html',
  styleUrl: './matcha-page.scss',
})
export class MatchaPageComponent {

}
