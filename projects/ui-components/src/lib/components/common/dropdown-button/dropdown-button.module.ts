import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownButtonComponent } from './dropdown-button.component';
import { ButtonModule } from '../button/button.module';
@NgModule({
  declarations: [DropdownButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [DropdownButtonComponent],
})
export class DropdownButtonModule {}
