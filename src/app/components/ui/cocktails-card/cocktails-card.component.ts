import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cocktails-card',
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './cocktails-card.component.html',
  styleUrl: './cocktails-card.component.scss'
})
export class CocktailsCardComponent {
  @Input() titleTranslationKey: string = '';
  @Input() price: string = '';

  @Input() descOne: string = '';
  @Input() descTwo: string = '';
  @Input() descThree: string = '';
  @Input() descFour: string = '';
  @Input() descFive: string = '';
  @Input() descSix: string = '';
  @Input() descSeven: string = '';
  @Input() descEight: string = '';
  @Input() descNine: string = '';
  @Input() descTen: string = '';


  @Input() imagePathOne: string = '';
  @Input() imagePathTwo: string = '';
  @Input() imagePathThree: string = '';

  isModalOpen = false;

  openModal(){ this.isModalOpen = true; }
  closeModal(){ this.isModalOpen = false; }
  closeModalOnOutsideClick(event: MouseEvent){
    const targetElement = event.target as HTMLElement;
    if(targetElement.classList.contains('fixed')){
      this.closeModal();
    }
  }
}
