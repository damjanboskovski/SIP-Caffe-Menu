import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nonalcoholic-card',
  imports: [],
  templateUrl: './nonalcoholic-card.component.html',
  styleUrl: './nonalcoholic-card.component.scss'
})
export class NonalcoholicCardComponent {
  @Input() title: string = '';
  @Input() imgPath: string = '';
  @Input() description: string = '';
}
