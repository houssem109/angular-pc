import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcComponent } from './pc/pc.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { UpdatePcComponent } from './update-pc/update-pc.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModelComponent } from './recherche-par-model/recherche-par-model.component';

const routes: Routes = [
  {path:"pc", component : PcComponent},
  {path:"add-pc", component :AddPcComponent },
  { path: "", redirectTo: "pc", pathMatch: "full" },
  {path: "updatePc/:id", component: UpdatePcComponent},
  {path:"recherche-par-marque", component: RechercheParMarqueComponent },
  {path:"recherche-par-model" , component:RechercheParModelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
