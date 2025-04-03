import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-whiskey-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './whiskey-page.component.html',
  styleUrl: './whiskey-page.component.scss'
})
export class WhiskeyPageComponent {

}
