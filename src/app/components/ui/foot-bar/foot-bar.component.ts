import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-foot-bar',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './foot-bar.component.html',
  styleUrl: './foot-bar.component.scss'
})
export class FootBarComponent {

}
