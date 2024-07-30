import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarLugarPageRoutingModule } from './modificar-lugar-routing.module';

import { ModificarLugarPage } from './modificar-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarLugarPageRoutingModule
  ],
  declarations: [ModificarLugarPage]
})
export class ModificarLugarPageModule {}
