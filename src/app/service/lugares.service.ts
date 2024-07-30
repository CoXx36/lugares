import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Sitios, Comentario } from '../lugares/Entidades/Sitio';
import firebase from 'firebase/compat/app'; // Importa firebase
import 'firebase/compat/firestore'; // Asegura que Firestore esté disponible


@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private firestore: AngularFirestore) { }

  getLugares(): Observable<Sitios[]> {
    return this.firestore.collection<Sitios>('lugares').valueChanges({ idField: 'Codigo' });
  }

  getLugar(cod: string): Observable<Sitios | undefined> {
    return this.firestore.collection('lugares').doc<Sitios>(cod).valueChanges();
  }

  InsertLugar(Titulo: string, ImagenURL: string, Comentario: Comentario[]): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('lugares').doc(id).set({
      Codigo: id,
      Titulo,
      ImagenURL,
      Comentario
    });
  }

  UpdateLugar(cod: string, nTitulo: string, nImagenURL: string, nComentario: Comentario[]): Promise<void> {
    return this.firestore.collection('lugares').doc(cod).update({
      Titulo: nTitulo,
      ImagenURL: nImagenURL,
      Comentario: nComentario
    });
  }

  DeleteLugar(cod: string): Promise<void> {
    return this.firestore.collection('lugares').doc(cod).delete();
  }

  AddComentario(cod: string, comentario: Comentario): Promise<void> {
    const lugarRef = this.firestore.collection('lugares').doc(cod);
    return lugarRef.update({
      Comentario: firebase.firestore.FieldValue.arrayUnion(comentario)
    });
  }
}
