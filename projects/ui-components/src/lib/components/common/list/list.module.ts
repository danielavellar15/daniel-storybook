import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TypographyModule } from '../typography/typography.module';
import { ListItemButtonComponent } from './list-item-button/list-item-button.component';
import { ListItemButtonGroupComponent } from './list-item-button-group/list-item-button-group.component';
import { ListItemComponent } from './list-item/list-item.component';
@NgModule({
  declarations: [
    ListComponent,
    ListItemButtonComponent,
    ListItemButtonGroupComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, TypographyModule],
  exports: [
    ListComponent,
    ListItemButtonComponent,
    ListItemButtonGroupComponent,
    ListItemComponent,
  ],
})
export class ListModule {}
