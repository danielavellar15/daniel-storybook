import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-sidenav-subitem',
  templateUrl: './sidenav-subitem.component.html',
  styleUrls: ['./sidenav-subitem.component.scss'],
})
export class SidenavSubitemComponent {
  @Input() title: string = '';
  @Input() navigation: string = '/';
}
