import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-halloween',
  standalone: true,
  imports: [],
  templateUrl: './halloween.component.html',
  styleUrl: './halloween.component.scss'
})
export class HalloweenComponent implements OnInit {
  emojiCollection = ['🧙‍♀️', '🧹', '🎃', '🦇', '👻', '🕷️', '🔮'];
  particles = 20;

  constructor(private renderer: Renderer2, public el: ElementRef) {}

  ngOnInit(): void {
    this.createParticle();
  }

  createParticle(): void {
    for (let i = 0; i < this.particles; i++) {
      let randomEmoji = this.emojiCollection[Math.floor(Math.random() * this.emojiCollection.length)];
      let emojiTopPosition = this.randomMinMax(5, 85);

      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(randomEmoji);

      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'witch');

      // Set starting vertical line across viewport height
      this.renderer.setStyle(span, 'top', emojiTopPosition + '%');

      // 1st duration = flight across screen (left-to-right)
      // 2nd duration = vertical wave speed (up-and-down)
      let flyDuration = this.randomMinMax(10.0, 17.0) + 's';
      let waveDuration = this.randomMinMax(3.8, 6.2) + 's';
      this.renderer.setStyle(span, 'animation-duration', `${flyDuration}, ${waveDuration}`);

      // Stagger start times so elements enter in waves
      let delay = this.randomMinMax(0.1, 10.0) + 's';
      this.renderer.setStyle(span, 'animation-delay', `${delay}, 0s`);

      // Vary particle sizes for visual depth
      let fontSize = this.randomMinMax(1.4, 2.4) + 'rem';
      this.renderer.setStyle(span, 'font-size', fontSize);

      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  randomMinMax(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
