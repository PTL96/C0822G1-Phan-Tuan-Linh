import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3-Anguar-Overview/Calculator/calculator/calculator.component';
import { ColorPickComponent } from './ss3-Anguar-Overview/ColorPick/color-pick/color-pick.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
