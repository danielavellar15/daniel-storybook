import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() isCollapsed = false;
}
