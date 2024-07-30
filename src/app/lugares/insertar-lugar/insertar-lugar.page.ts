import { Component, OnInit, ViewChild} from '@angular/core';
import { LugaresService } from 'src/app/service/lugares.service';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { Comentario } from '../Entidades/Sitio';

@Component({
  selector: 'app-insertar-lugar',
  templateUrl: './insertar-lugar.page.html',
  styleUrls: ['./insertar-lugar.page.scss'],
})
export class InsertarLugarPage implements OnInit {

  @ViewChild('tit', { static: false }) titInput!: IonInput;
  @ViewChild('img', { static: false }) imgInput!: IonInput;
  @ViewChild('com', { static: false }) comInput!: IonInput;

  comentarios: Comentario[] =[]
  constructor(
    private oser: LugaresService, 
    private aser:AuthService,
    private Oroute: Router) { }

  ngOnInit() {
  }

  InsertarLugar() {
    const tit = this.titInput.value as string;
    const img = this.imgInput.value as string;
    const com = this.comInput.value as string;
  
    if (com) {
      this.comentarios = com.split(',').map(c => ({
        contenido: c.trim(),
        autor: this.aser.getUserUsername() || ''
      }));
    }
    
  
    this.oser.InsertLugar(tit, img, this.comentarios)
      .then(() => {
        this.Oroute.navigate(['/lugares']);
      })
      .catch(error => console.error('Error al agregar lugar:', error));
  }
  
  

}
