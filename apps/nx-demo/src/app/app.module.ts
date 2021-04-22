import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FeaturesTodosModule} from '@nx-demo/features/todos';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FeaturesTodosModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
