import { Component } from '@angular/core';
import { NonalcoholicCardComponent } from '../../ui/nonalcoholic-card/nonalcoholic-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nonalcoholic-page',
  imports: [
    NonalcoholicCardComponent,
    NgClass
  ],
  templateUrl: './nonalcoholic-page.component.html',
  styleUrl: './nonalcoholic-page.component.scss'
})
export class NonalcoholicPageComponent {

}
