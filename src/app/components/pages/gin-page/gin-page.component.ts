import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gin-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './gin-page.component.html',
  styleUrl: './gin-page.component.scss'
})
export class GinPageComponent {

}
