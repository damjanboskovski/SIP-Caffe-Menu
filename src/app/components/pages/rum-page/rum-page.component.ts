import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-rum-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './rum-page.component.html',
  styleUrl: './rum-page.component.scss'
})
export class RumPageComponent {

}
