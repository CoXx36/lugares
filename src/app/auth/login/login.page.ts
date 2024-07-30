import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private route:Router) {}


  ngOnInit() {
  }

  async login() {
    const user = await this.authService.login(this.email, this.password);
    if (user) {
      console.log("Inicio de sesión exitoso", user);
      this.route.navigate(['auth'])
    } else {
      console.error("Error en el inicio de sesión");
    }
  }

}
