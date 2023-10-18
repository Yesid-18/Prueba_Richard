export class Nota {
    nombre: string;
    titulo: string;
    contenido: string;
    fecha: Date;

    constructor(nombre: string, titulo: string, contenido: string, fecha: Date){
        this.nombre = nombre;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;

    }
}