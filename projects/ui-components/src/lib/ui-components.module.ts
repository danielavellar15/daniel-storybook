import { NgModule } from '@angular/core';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { TypographyModule } from './components/typography/typography.module';
import { ListModule } from './components/list/list.module';

@NgModule({
  declarations: [],
  imports: [SidenavModule, TypographyModule, ListModule],
  exports: [SidenavModule, TypographyModule, ListModule],
})
export class UiComponentsModule {}
