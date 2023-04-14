import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiComponentsModule } from 'ui-components/ui-components.module';
import { LucideAngularModule, icons } from 'lucide-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentsModule, LucideAngularModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
