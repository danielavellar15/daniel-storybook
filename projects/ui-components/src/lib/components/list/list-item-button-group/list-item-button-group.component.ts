import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'ui-list-item-button-group',
  templateUrl: './list-item-button-group.component.html',
  styleUrls: ['./list-item-button-group.component.scss'],
})
export class ListItemButtonGroupComponent {
  @ViewChild('subitems', { static: false }) subitemsElementRef!: ElementRef;
  @Input() collapsed: boolean = true;
  @Input() title = '';
  @Output() openSubItem: EventEmitter<string> = new EventEmitter<string>();
  idComponent: string = uuidv4();

  ngOnChanges(changes: SimpleChanges) {
    //detectar mudanca para aberto e realizar os ajustes
    console.log('changes', changes);
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
