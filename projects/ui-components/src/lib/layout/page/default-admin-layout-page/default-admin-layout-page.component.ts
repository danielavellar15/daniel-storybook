import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-default-admin-layout-page',
  templateUrl: './default-admin-layout-page.component.html',
  styleUrls: ['./default-admin-layout-page.component.scss'],
})
export class DefaultAdminLayoutPageComponent {
  @Input() theme = 'light';
  @Input() isCollapsedSidenav = false;
}
