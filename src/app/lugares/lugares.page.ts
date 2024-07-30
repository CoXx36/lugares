import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../service/lugares.service';
import { Sitios } from './Entidades/Sitio';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  ListaSitios: Sitios[] = [];
  rol:any;

  constructor(private Oser: LugaresService, private Oroute: Router,private authService: AuthService) { }


  ngOnInit() {
    this.rol = this.authService.getUserRole();
    this.cargarLugares();
  }

  ionViewWillEnter() {
    this.rol = this.authService.getUserRole();
    this.cargarLugares();
  }
  
  PaginaInsertarLugar() {
    this.Oroute.navigate(['/insertar-lugar']);
  }


  cargarLugares() {
    this.Oser.getLugares().subscribe((data: Sitios[]) => {
      this.ListaSitios = data;
    });
  }

}
