import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type = 'navigation';
  @Input() disabled = false;
  @Input() theme: string = 'light';
  @Input() fontSize = '';
  @Input() color = 'primary';

  constructor() {}
}
