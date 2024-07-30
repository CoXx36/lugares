import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresPage
  },  {
    path: 'detalle-lugar',
    loadChildren: () => import('./detalle-lugar/detalle-lugar.module').then( m => m.DetalleLugarPageModule)
  },
  {
    path: 'insertar-lugar',
    loadChildren: () => import('./insertar-lugar/insertar-lugar.module').then( m => m.InsertarLugarPageModule)
  },
  {
    path: 'modificar-lugar',
    loadChildren: () => import('./modificar-lugar/modificar-lugar.module').then( m => m.ModificarLugarPageModule)
  },
  {
    path: 'insertar-comentario',
    loadChildren: () => import('./insertar-comentario/insertar-comentario.module').then( m => m.InsertarComentarioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}
