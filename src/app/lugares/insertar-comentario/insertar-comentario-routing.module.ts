import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarComentarioPage } from './insertar-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarComentarioPageRoutingModule {}
