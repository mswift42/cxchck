import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';


import { AppComponent } from './app.component';
import { SearchInputComponentComponent } from './search-input-component/search-input-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponentComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
