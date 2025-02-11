import { Component } from '@angular/core';
import { NonalcoholicCardComponent } from '../../ui/nonalcoholic-card/nonalcoholic-card.component';

@Component({
  selector: 'app-alcoholic-page',
  imports: [
    NonalcoholicCardComponent,
  ],
  templateUrl: './alcoholic-page.component.html',
  styleUrl: './alcoholic-page.component.scss'
})
export class AlcoholicPageComponent {

}
