import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vermuth-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './vermuth-page.component.html',
  styleUrl: './vermuth-page.component.scss'
})
export class VermuthPageComponent {

}
