import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-snow',
  imports: [],
  templateUrl: './snow.component.html',
  styleUrl: './snow.component.scss'
})
export class SnowComponent implements OnInit {
  //emojiCollection = ['💐', '❤️', '💗', '💘', '🌹', '💖' ]; Valentine
  // emojiCollection = [❄️💐❤️💗💘🌹💖]; '❆', '❄︎', '❅', '❆', '❆', '❄︎', '❅', '❆'
  emojiCollection = ['🐰', '🐇', '🐣', '💐', '🌹', '🎀', '🥚', '🧺'];
  particles = 40;
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;

  constructor(private renderer: Renderer2, public el: ElementRef){}

  ngOnInit(): void {
    this.createParticle();
  }

  createParticle(){
    for(let i = 0; i < this.particles; i++){
      let randomEmoji = this.emojiCollection[Math.floor(Math.random() * this.emojiCollection.length)];
      let emojiLeftPosition = (innerWidth / this.particles) * i;
      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(randomEmoji);
      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'snowflake');
      this.renderer.setStyle(span, 'left', emojiLeftPosition + 'px');
      this.renderer.setStyle(span, 'animation-duration', (this.randomMinMax(4, 5.0) + 's', this.randomMinMax(4, 5.0) + 's'));
      this.renderer.setStyle(span, 'animation-delay', this.randomMinMax(0.3, 4.0) + 's');
      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  randomMinMax(min : number, max : number){
    return Math.random() * (max - min) + min;
  }
}
