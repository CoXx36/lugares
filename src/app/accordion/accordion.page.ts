import { Component, OnInit } from '@angular/core';
import { Sitios } from '../lugares/Entidades/Sitio';
import { LugaresService } from '../service/lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  ListaSitios: Sitios[] = [];

  constructor(private Oser: LugaresService, private Oroute: Router) { }

  ngOnInit() {
    this.cargarLugares() ;
  }
  ionViewWillEnter() {
    this.cargarLugares() ;
  }

  cargarLugares() {
    this.Oser.getLugares().subscribe((data: Sitios[]) => {
      this.ListaSitios = data;
    });
  }

}
