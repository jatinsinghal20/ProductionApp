import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import {FormsModule} from "@angular/forms";
import { StarComponentComponent } from './shared/star-component/star-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
