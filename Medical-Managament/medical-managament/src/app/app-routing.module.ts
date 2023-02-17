import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalListComponent} from "./medical-list/medical-list.component";
import {MedicalCreateComponent} from "./medical-create/medical-create.component";
import {MedicalUpdateComponent} from "./medical-update/medical-update.component";

const routes: Routes = [
  {path:'', component: MedicalListComponent},
  {path: 'create', component: MedicalCreateComponent},
  {path: 'update/:id', component: MedicalUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
