import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

import {MyUpperPipe} from './product/myupper.pipe';
import {MyDiscount} from './product/mydiscount.pipe';
import {ProductSearch} from './product/productsearch.pipe';
import {StarComponent} from './shared/star.component';
@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, HeaderComponent,
    FooterComponent, ProductComponent,
    MyUpperPipe , MyDiscount, ProductSearch, StarComponent ],
  bootstrap: [AppComponent],
  providers: []

})


export class AppModule{}

