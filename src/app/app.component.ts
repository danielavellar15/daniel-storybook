import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'daniel-storybook';
  isCollapsedSidenav = false;

  toggleSidenav() {
    this.isCollapsedSidenav = !this.isCollapsedSidenav;
  }
}
