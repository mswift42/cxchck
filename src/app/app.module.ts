import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule, MatFormFieldModule, MatCardModule, MatRadioModule, MatButtonModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {SearchInputComponentComponent} from './search-input-component/search-input-component.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ResultListComponent} from './result-list/result-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponentComponent,
    ProductCardComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
