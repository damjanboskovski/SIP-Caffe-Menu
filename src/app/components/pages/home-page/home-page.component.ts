import { Component } from '@angular/core';
import { FootBarComponent } from '../../ui/foot-bar/foot-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FootBarComponent,
    TranslateModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
