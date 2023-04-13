import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-list-item-button',
  templateUrl: './list-item-button.component.html',
  styleUrls: ['./list-item-button.component.scss'],
})
export class ListItemButtonComponent {
  @Input() title = '';
  @Output() onButtonClick = new EventEmitter();

  hasSubItems = false;

  ngOnInit() {}

  onClick() {
    this.onButtonClick.emit();
  }
}
