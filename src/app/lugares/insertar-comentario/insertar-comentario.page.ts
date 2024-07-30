import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from 'src/app/service/lugares.service';
import { Comentario, Sitios } from '../Entidades/Sitio';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-insertar-comentario',
  templateUrl: './insertar-comentario.page.html',
  styleUrls: ['./insertar-comentario.page.scss'],
})
export class InsertarComentarioPage implements OnInit {
  lugar: Sitios | undefined;


  tit!: string;
  com!: string;

  constructor(
    private actRoute: ActivatedRoute,
    private oser: LugaresService,
    private aser:AuthService,
    private Oroute: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('LugarId');
      if (id) {
        this.oser.getLugar(id).subscribe((data: Sitios | undefined) => {
          this.lugar = data;
          if (this.lugar) {
            this.tit = this.lugar.Titulo;
          }
        });      
      }
    })
  }

agregarComentario() {
  const comentario: Comentario = {
    contenido: this.com,
    autor: this.aser.getUserUsername() || ''// Asume que tienes un input para el autor
  };

  this.oser.AddComentario(this.lugar!.Codigo, comentario)
    .then(() => {
      console.log('Comentario agregado exitosamente');
      this.Oroute.navigate(['/lugares', this.lugar?.Codigo]);
    })
    .catch(error => console.error('Error al agregar comentario:', error));
}


}
