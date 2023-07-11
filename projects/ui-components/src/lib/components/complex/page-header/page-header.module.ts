import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { TypographyModule } from '../../common/typography/typography.module';
import { ButtonModule } from '../../common/button/button.module';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, TypographyModule, ButtonModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
