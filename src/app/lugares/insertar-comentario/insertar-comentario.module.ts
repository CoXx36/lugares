import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarComentarioPageRoutingModule } from './insertar-comentario-routing.module';

import { InsertarComentarioPage } from './insertar-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarComentarioPageRoutingModule
  ],
  declarations: [InsertarComentarioPage]
})
export class InsertarComentarioPageModule {}
