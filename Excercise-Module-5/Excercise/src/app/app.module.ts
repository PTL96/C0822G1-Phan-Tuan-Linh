import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3-Anguar-Overview/Calculator/calculator/calculator.component';
import { ColorPickComponent } from './ss3-Anguar-Overview/ColorPick/color-pick/color-pick.component';
import { HackernewsComponent } from './ss4-Angular-Template/hackernews/hackernews.component';
import { HeaderComponent } from './ss4-Angular-Template/header/header.component';
import { FooterComponent } from './ss4-Angular-Template/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './ss4-Angular-Template/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    HackernewsComponent,
    HeaderComponent,
    FooterComponent,
    LikeComponent
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
