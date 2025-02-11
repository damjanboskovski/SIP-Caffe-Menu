import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/ui/nav-bar/nav-bar.component';
import { FootBarComponent } from './components/ui/foot-bar/foot-bar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

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
}
