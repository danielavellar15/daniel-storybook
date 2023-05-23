import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
})
export class DropdownButtonComponent {
  @Input() isOpen = false;
  @Input() direction = 'right';

  @ViewChild('dropdownContent') dropdownContent!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  onItemClick(event: MouseEvent) {
    if (this.dropdownContent.nativeElement.contains(event.target)) {
      this.isOpen = false;
      document.removeEventListener('click', this.clickOutsideListener);
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.addEventListener('click', this.clickOutsideListener);
    } else {
      document.removeEventListener('click', this.clickOutsideListener);
    }
  }

  clickOutsideListener = (event: MouseEvent) => {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      document.removeEventListener('click', this.clickOutsideListener);
    }
  };
}
