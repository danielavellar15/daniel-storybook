import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { TypographyModule } from '../typography/typography.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, TypographyModule, RouterModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
