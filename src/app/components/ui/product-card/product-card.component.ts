import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-card',
  imports: [
    TranslateModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() titleTranslationKey: string = ''; 
  @Input() imgPath: string = '';
  @Input() price: string = ''
}
