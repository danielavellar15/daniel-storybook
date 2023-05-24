import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { TypographyModule } from 'ui-components/components/common/typography/typography.module';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, TypographyModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
