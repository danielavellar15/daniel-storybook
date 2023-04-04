import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'ui-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  @ViewChild('subitems', { static: false }) subitemsElementRef!: ElementRef;
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() navigation: string = '/';
  @Input() collapsed: boolean = true;
  @Output() openSubItem: EventEmitter<string> = new EventEmitter<string>();

  idComponent: string = uuidv4();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    //detectar mudanca para aberto e realizar os ajustes
    if (changes['collapsed']?.currentValue === true) {
      if (
        changes['collapsed'].currentValue !== changes['collapsed'].previousValue
      ) {
        this.closeSubItems();
      }
    }
  }

  toggleSubitems(collapsed: boolean) {
    this.collapsed = collapsed;
    if (collapsed === false) {
      this.openSubItems();
    } else {
      this.closeSubItems();
    }
  }

  openSubItems() {
    this.openSubItem.emit(this.idComponent);

    const innerDivSubitems: HTMLElement =
      this.subitemsElementRef.nativeElement.querySelector('#subitems-inner');
    const innerHeight = innerDivSubitems.clientHeight;
    this.setHeightToSubitems(innerHeight);
  }

  closeSubItems() {
    this.setHeightToSubitems(0);
  }

  setHeightToSubitems(height: number) {
    this.subitemsElementRef.nativeElement.style.height = `${height}px`;
  }
}
