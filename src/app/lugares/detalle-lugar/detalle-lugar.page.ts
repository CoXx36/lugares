import { Component, OnInit } from '@angular/core';
import { Sitios } from '../Entidades/Sitio';
import { LugaresService } from 'src/app/service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {

  lugar: Sitios | undefined;

  rol:any;

  constructor(
    private oser: LugaresService,
    private actRoute: ActivatedRoute,
    private Oroute: Router,
    private Ocont: AlertController,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.rol = this.authService.getUserRole();
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('LugarId');
      if (id) {
        this.oser.getLugar(id).subscribe((data: Sitios | undefined) => {
          this.lugar = data;
        });        
      }
    });
  }

  async EliminarLugar() {
    const aler = await this.Ocont.create({
      header: "Eliminar Lugar",
      message: "Desea eliminar lugar de la lista",
      buttons: [{
        text: "Cancelar",
        role: "cancel"
      },
      {
        text: "Delete",
        handler: () => {
          this.oser.DeleteLugar(this.lugar!.Codigo);
          this.Oroute.navigateByUrl("/lugares");
        }
      }
      ]
    });
    await aler.present();
  }

  PaginaInsertarComentario(){
    const lugarId = this.lugar!.Codigo;
    this.Oroute.navigate(['/insertar-comentario', lugarId]);
  }

}
