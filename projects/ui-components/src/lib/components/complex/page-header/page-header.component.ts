import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() theme = 'light';
  @Input() title = '';
  @Input() backHistory = false;
  @Input() backHistoryCallback?: () => void;

  goBack() {
    if (this.backHistoryCallback) {
      this.backHistoryCallback();
    } else {
      window.history.back();
    }
  }
}
