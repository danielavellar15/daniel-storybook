import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-default-admin-layout-page',
  templateUrl: './default-admin-layout-page.component.html',
  styleUrls: ['./default-admin-layout-page.component.scss'],
})
export class DefaultAdminLayoutPageComponent {
  @ViewChild('sidenav') sidenav!: ElementRef;
  @Input() isCollapsedSidenav = false;
  @Input() theme = 'light';
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  enableOutsideClick = false;

  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent) {
    if (
      !this.isCollapsedSidenav &&
      window.innerWidth < 801 &&
      !this.sidenav?.nativeElement.contains(event.target) &&
      this.enableOutsideClick
    ) {
      this.onCloseSidenav.emit(true);
      this.enableOutsideClick = false;
    } else if (!this.enableOutsideClick && !this.isCollapsedSidenav) {
      this.enableOutsideClick = true;
    }
  }

  ngOnInit() {
    this.enableOutsideClick = !this.isCollapsedSidenav;
  }
}
