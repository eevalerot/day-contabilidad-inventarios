import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { KardexComponent } from './kardex/kardex.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    InventarioComponent,
    KardexComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
