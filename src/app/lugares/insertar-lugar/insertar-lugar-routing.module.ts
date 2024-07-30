import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarLugarPage } from './insertar-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarLugarPageRoutingModule {}
