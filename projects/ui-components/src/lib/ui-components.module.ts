import { NgModule } from '@angular/core';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { TypographyModule } from './components/typography/typography.module';

@NgModule({
  declarations: [],
  imports: [SidenavModule, TypographyModule],
  exports: [SidenavModule, TypographyModule],
})
export class UiComponentsModule {}
