import { Component } from '@angular/core';
import { FootBarComponent } from '../../ui/foot-bar/foot-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FootBarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
