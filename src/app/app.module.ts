import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchInputComponentComponent } from './search-input-component/search-input-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
