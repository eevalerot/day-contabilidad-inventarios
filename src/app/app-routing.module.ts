import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'inventarios', loadChildren: ()=> import('./features/inventario/inventario.module').then(m => m.InventarioModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
