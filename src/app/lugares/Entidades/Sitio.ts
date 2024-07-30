/* export interface Sitios{
    Codigo:string;
    Titulo:string;
    ImagenURL:string;
    Comentario:string[]
} */

export interface Comentario {
    contenido: string;
    autor: string; // Puedes usar 'autorId' si quieres usar IDs en lugar de nombres
  }
  
  export interface Sitios {
    Codigo: string;
    Titulo: string;
    ImagenURL: string;
    Comentario: Comentario[];
  }
  