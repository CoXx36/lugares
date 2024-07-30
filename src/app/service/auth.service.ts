import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import User = firebase.User;  // Importa el tipo User de firebase/compat

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {}

  // Método de registro con atributos adicionales
  async register(email: string, password: string, username: string, nombres: string, apellidos: string, rol: string): Promise<User | null> {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Crear un documento de usuario en Firestore con atributos adicionales
        await this.firestore.collection('users').doc(user.uid).set({
          email: user.email,
          uid: user.uid,
          password:password,
          username: username,
          nombres: nombres,
          apellidos: apellidos,
          rol: rol
        });
      }

      return user;
    } catch (error) {
      console.error("Error en el registro: ", error);
      return null;
    }
  }

// Método de inicio de sesión
async login(email: string, password: string): Promise<User | null> {
  try {
    const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (user) {
      // Obtener los datos adicionales del usuario desde Firestore
      const userDoc = await this.firestore.collection('users').doc(user.uid).ref.get();
      const userData = userDoc.data();

      if (userData) {
        // Almacenar los datos completos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          ...userData
        }));
      }
    }

    return user;
  } catch (error) {
    console.error("Error en el inicio de sesión: ", error);
    return null;
  }
}

  // Método de cierre de sesión
  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
      // Eliminar los datos del usuario de localStorage
      localStorage.removeItem('user');
    } catch (error) {
      console.error("Error en el cierre de sesión: ", error);
    }
  }

  // Método para obtener el rol del usuario desde localStorage
  getUserRole(): string | null {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      const user = JSON.parse(userLocal);
      return user.rol;
    }
    return null;
  }

  getUserUsername(): string | null {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      const user = JSON.parse(userLocal);
      return user.username;
    }
    return null;
  }

  // Método para obtener el estado de autenticación del usuario
  getAuthState() {
    return this.auth.authState;
  }
}
