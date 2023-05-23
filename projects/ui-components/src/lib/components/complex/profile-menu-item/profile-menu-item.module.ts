import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuItemComponent } from './profile-menu-item.component';
import { DropdownButtonModule } from '../../common/dropdown-button/dropdown-button.module';
import { ListModule } from '../../common/list/list.module';
@NgModule({
  declarations: [ProfileMenuItemComponent],
  imports: [CommonModule, DropdownButtonModule, ListModule],
  exports: [ProfileMenuItemComponent],
})
export class ProfileMenuItemModule {}
