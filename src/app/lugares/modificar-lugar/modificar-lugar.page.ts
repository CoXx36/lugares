import { Component, OnInit } from '@angular/core';
import { Comentario, Sitios } from '../Entidades/Sitio';
import { LugaresService } from 'src/app/service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modificar-lugar',
  templateUrl: './modificar-lugar.page.html',
  styleUrls: ['./modificar-lugar.page.scss'],
})
export class ModificarLugarPage implements OnInit {
  lugar: Sitios | undefined;
  comentarios: Comentario[] =[]

  tit!: string;
  img!: string;
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
            this.img = this.lugar.ImagenURL;
            this.tit = this.lugar.Titulo;

            this.com = this.lugar.Comentario.map(c => `${c.contenido}`).join(', '); // Concatenar comentarios con autor
          }
        });
      }
    })
  }

/* 
  ModificarLugar() {
    if (this.com) {
      this.comentarios = this.com.split(',').map(c => ({
        contenido: c.trim(),
        autor: this.aser.getUserUsername() || '' // Asume que tienes un input para el autor
      }));
    }
  
  
    this.oser.UpdateLugar(this.lugar!.Codigo, this.tit, this.img, this.comentarios)
      .then(() => {
        this.Oroute.navigate(['/lugares', this.lugar?.Codigo]);
      })
      .catch(error => console.error('Error al actualizar lugar:', error));
  } */
      ModificarLugar() {
        if (this.com) {
          const nuevosComentarios = this.com.split(',').map(c => c.trim());
      
          // Combina los comentarios existentes preservando sus autores y los nuevos comentarios con el autor actual
          const todosComentarios: Comentario[] = [
            ...this.lugar!.Comentario.filter(c => nuevosComentarios.includes(c.contenido)),
            ...nuevosComentarios.filter(nc => !this.lugar!.Comentario.some(ec => ec.contenido === nc)).map(nc => ({
              contenido: nc,
              autor: this.aser.getUserUsername() || 'Desconocido'
            }))
          ];
      
          this.oser.UpdateLugar(this.lugar!.Codigo, this.tit, this.img, todosComentarios)
            .then(() => {
              this.Oroute.navigate(['/lugares', this.lugar?.Codigo]);
            })
            .catch(error => console.error('Error al actualizar lugar:', error));
        }
      }
      
  
  
}
