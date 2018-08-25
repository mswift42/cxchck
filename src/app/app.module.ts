import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CxsearchComponent } from './cxsearch/cxsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    CxsearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
