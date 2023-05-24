import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() theme = 'light';
  @Input() title = '';
}
