import { Component } from '@angular/core';
import { NonalcoholicCardComponent } from '../../ui/nonalcoholic-card/nonalcoholic-card.component';

@Component({
  selector: 'app-nonalcoholic-page',
  imports: [
    NonalcoholicCardComponent,
  ],
  templateUrl: './nonalcoholic-page.component.html',
  styleUrl: './nonalcoholic-page.component.scss'
})
export class NonalcoholicPageComponent {

}
