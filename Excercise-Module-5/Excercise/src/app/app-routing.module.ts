import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./ss7-Service-Router/dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./ss7-Service-Router/dictionary-detail/dictionary-detail.component";

const routes: Routes = [
  {path:'', component:DictionaryComponent},
  {path:'dictionary/detail/:id', component:DictionaryDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
