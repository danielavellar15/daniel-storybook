import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-profile-menu-item',
  templateUrl: './profile-menu-item.component.html',
  styleUrls: ['./profile-menu-item.component.scss'],
})
export class ProfileMenuItemComponent {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() profilePicture = '';
}
