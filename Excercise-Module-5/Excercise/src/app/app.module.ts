import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ss3-Anguar-Overview/Calculator/calculator/calculator.component';
import { ColorPickComponent } from './ss3-Anguar-Overview/ColorPick/color-pick/color-pick.component';
import { HackernewsComponent } from './ss4-Angular-Template/hackernews/hackernews.component';
import { HeaderComponent } from './ss4-Angular-Template/header/header.component';
import { FooterComponent } from './ss4-Angular-Template/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LikeComponent } from './ss4-Angular-Template/like/like.component';
import { CountdowTimerComponent } from './ss5-Component-Interaction/countdow-timer/countdow-timer.component';
import { RatingBarComponent } from './ss5-Component-Interaction/rating-bar/rating-bar.component';
import { InformationFormComponent } from './ss6-AngularForm/information-form/information-form.component';
import { LoginComponent } from './ss6-AngularForm/login/login.component';
import { DictionaryComponent } from './ss7-Service-Router/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './ss7-Service-Router/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickComponent,
    HackernewsComponent,
    HeaderComponent,
    FooterComponent,
    LikeComponent,
    CountdowTimerComponent,
    RatingBarComponent,
    InformationFormComponent,
    LoginComponent,
    DictionaryComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
