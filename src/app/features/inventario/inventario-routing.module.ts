import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { KardexComponent } from './kardex/kardex.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {
    path: '', component: InventarioComponent
  },
  {
    path: 'kardex', component: KardexComponent
  },
  {
    path: 'reportes', component: ReportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
