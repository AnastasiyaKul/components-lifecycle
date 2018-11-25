import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JSComponent } from './js/js.component';
import { TsComponent } from './ts/ts.component';
import { CssComponent } from './css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    JSComponent,
    TsComponent,
    CssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
