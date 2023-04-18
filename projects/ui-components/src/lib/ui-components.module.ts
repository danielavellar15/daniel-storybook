import { NgModule } from '@angular/core';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { TypographyModule } from './components/typography/typography.module';
import { ListModule } from './components/list/list.module';
import { HeaderModule } from './components/header/header.module';
import { DefaultAdminLayoutPageModule } from './layout/page/default-admin-layout-page/default-admin-layout-page.module';
import { DropdownButtonModule } from './components/dropdown-button/dropdown-button.module';
import { ButtonModule } from './components/button/button.module';

@NgModule({
  declarations: [],
  imports: [
    SidenavModule,
    TypographyModule,
    ListModule,
    HeaderModule,
    DefaultAdminLayoutPageModule,
    DropdownButtonModule,
    ButtonModule,
  ],
  exports: [
    SidenavModule,
    TypographyModule,
    ListModule,
    HeaderModule,
    DefaultAdminLayoutPageModule,
    DropdownButtonModule,
    ButtonModule,
  ],
})
export class UiComponentsModule {}
