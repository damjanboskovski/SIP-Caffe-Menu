import { Component } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-serving-boards',
  imports: [
    ProductCardComponent,
    TranslateModule
  ],
  templateUrl: './serving-boards.component.html',
  styleUrl: './serving-boards.component.scss'
})
export class ServingBoardsComponent {

}
