import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cognac-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './cognac-page.component.html',
  styleUrl: './cognac-page.component.scss'
})
export class CognacPageComponent {

}
