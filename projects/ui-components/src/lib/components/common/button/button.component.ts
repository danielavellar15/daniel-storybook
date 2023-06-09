import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() size: 'md' | 'lg' | 'sm' = 'md';
  @Input() rounded = false;
  @Output() onButtonClick = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }

  constructor() {}
}
