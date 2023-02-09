import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./ss7-Service-Router/dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./ss7-Service-Router/dictionary-detail/dictionary-detail.component";
import {InformationFormComponent} from "./ss6-AngularForm/information-form/information-form.component";

const routes: Routes = [
  // {path:'', component:DictionaryComponent},
  {path:'', component:InformationFormComponent},
  {path:'dictionary/detail/:id', component:DictionaryDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
