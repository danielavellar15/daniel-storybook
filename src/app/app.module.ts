import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsModule } from 'ui-components/ui-components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
