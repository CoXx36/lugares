import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  user: any;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  ionViewWillEnter() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      this.user = JSON.parse(userLocal);
    }
  }

  async logout() {
    await this.authService.logout();
    this.route.navigate(['lugares'])
    console.log("Cierre de sesión exitoso");
  }



}
