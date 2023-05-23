import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() variant = 'text';
}
