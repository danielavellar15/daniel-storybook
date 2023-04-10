import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavSubitemComponent } from './sidenav-subitem/sidenav-subitem.component';
import { TypographyModule } from '../typography/typography.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    SidenavSubitemComponent,
  ],
  imports: [CommonModule, TypographyModule, RouterModule],
  exports: [SidenavComponent, SidenavItemComponent, SidenavSubitemComponent],
})
export class SidenavModule {}
