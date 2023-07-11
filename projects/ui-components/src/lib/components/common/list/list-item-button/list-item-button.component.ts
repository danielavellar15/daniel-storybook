import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-list-item-button',
  templateUrl: './list-item-button.component.html',
  styleUrls: ['./list-item-button.component.scss'],
})
export class ListItemButtonComponent {
  @Input() title = '';
  @Input() size: 'md' | 'lg' | 'sm' = 'sm';
  @Input() theme = 'light';
  public variant = 'button';
  @Output() onButtonClick = new EventEmitter();

  ngOnInit() {
    this.variant = this.size == 'sm' ? 'paragraph' : 'button';
    console.log('this.variant', this.variant);
  }

  onClick() {
    this.onButtonClick.emit();
  }
}
