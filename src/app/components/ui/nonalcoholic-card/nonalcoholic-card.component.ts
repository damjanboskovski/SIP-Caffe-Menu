import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nonalcoholic-card',
  imports: [
    TranslateModule,
  ],
  templateUrl: './nonalcoholic-card.component.html',
  styleUrl: './nonalcoholic-card.component.scss'
})
export class NonalcoholicCardComponent {
  @Input() titleTranslationKey: string = '';
  @Input() imgPath: string = '';
  @Input() description: string = '';
}
