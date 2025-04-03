import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nocoffe-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './nocoffe-page.component.html',
  styleUrl: './nocoffe-page.component.scss'
})
export class NocoffePageComponent {

}
