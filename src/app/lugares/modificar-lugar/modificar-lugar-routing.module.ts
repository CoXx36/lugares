import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarLugarPage } from './modificar-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarLugarPageRoutingModule {}
