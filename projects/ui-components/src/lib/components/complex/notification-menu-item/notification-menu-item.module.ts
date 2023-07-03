import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationMenuItemComponent } from './notification-menu-item.component';
import { DropdownButtonModule } from '../../common/dropdown-button/dropdown-button.module';
import { ListModule } from '../../common/list/list.module';
@NgModule({
  declarations: [NotificationMenuItemComponent],
  imports: [CommonModule, DropdownButtonModule, ListModule],
  exports: [NotificationMenuItemComponent],
})
export class NotificationMenuItemModule {}
