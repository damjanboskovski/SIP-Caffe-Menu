import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/ui/nav-bar/nav-bar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { DbService } from './shared/services/db.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide : LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppComponent {
  title = 'SIP-Caffe-Menu';
  constructor(
    public dbService: DbService,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }
}
