import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  email: string = '';
  password: string = '';
  username: string = '';
  nombres: string = '';
  apellidos: string = '';
  rol: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }


  async register() {
    const user = await this.authService.register(this.email, this.password, this.username, this.nombres, this.apellidos, this.rol);
    if (user) {
      console.log("Registro exitoso", user);
      // Navegar o realizar alguna acción después del registro exitoso
    } else {
      console.error("Error en el registro");
    }
  }

}
