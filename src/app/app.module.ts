import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiComponentsModule } from 'ui-components/ui-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
