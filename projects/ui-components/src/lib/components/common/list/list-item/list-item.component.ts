import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() title = '';
}
