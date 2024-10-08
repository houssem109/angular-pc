import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcComponent } from './pc/pc.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { UpdatePcComponent } from './update-pc/update-pc.component';

const routes: Routes = [
  {path:"pc", component : PcComponent},
  {path:"add-pc", component :AddPcComponent },
  { path: "", redirectTo: "pc", pathMatch: "full" },
  {path: "updatePc/:id", component: UpdatePcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
