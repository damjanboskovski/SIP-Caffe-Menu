import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-liker-page',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './liker-page.component.html',
  styleUrl: './liker-page.component.scss'
})
export class LikerPageComponent {

}
