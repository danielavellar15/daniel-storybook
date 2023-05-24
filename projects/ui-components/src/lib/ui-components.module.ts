import { NgModule } from '@angular/core';
import { SidenavModule } from './components/common/sidenav/sidenav.module';
import { TypographyModule } from './components/common/typography/typography.module';
import { ListModule } from './components/common/list/list.module';
import { HeaderModule } from './components/common/header/header.module';
import { DefaultAdminLayoutPageModule } from './layout/page/default-admin-layout-page/default-admin-layout-page.module';
import { DropdownButtonModule } from './components/common/dropdown-button/dropdown-button.module';
import { ButtonModule } from './components/common/button/button.module';
import { ProfileMenuItemModule } from './components/complex/profile-menu-item/profile-menu-item.module';
import { CardModule } from './components/common/card/card.module';
import { PageHeaderModule } from './components/complex/page-header/page-header.module';

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
    ProfileMenuItemModule,
    CardModule,
    PageHeaderModule,
  ],
  exports: [
    SidenavModule,
    TypographyModule,
    ListModule,
    HeaderModule,
    DefaultAdminLayoutPageModule,
    DropdownButtonModule,
    ButtonModule,
    ProfileMenuItemModule,
    CardModule,
    PageHeaderModule,
  ],
})
export class UiComponentsModule {}
