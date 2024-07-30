import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarLugarPageRoutingModule } from './insertar-lugar-routing.module';

import { InsertarLugarPage } from './insertar-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarLugarPageRoutingModule
  ],
  declarations: [InsertarLugarPage]
})
export class InsertarLugarPageModule {}
