import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/notas';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-notas',
  templateUrl: './create-notas.component.html',
  styleUrls: ['./create-notas.component.css']
})
export class CreateNotasComponent implements OnInit {
  NotaForm! : FormGroup;
  title = 'Create Note'

  constructor( private fb:FormBuilder,
               private router: Router) {
      this.NotaForm = this.fb.group({
        nombre:['', [Validators.required, Validators.minLength(6) ]],
        titulo: ['', Validators.required],
        contenido:['', Validators.required],
        fecha:['', Validators.required]
      })
  
     }
   
  ngOnInit(): void {
  }

 
  crearNota(){
    console.log(this.NotaForm);
    const NOTAS: Nota = {
      nombre: this.NotaForm.get('nombre')?.value,
      titulo: this.NotaForm.get('titulo')?.value,
      contenido: this.NotaForm.get('contenido')?.value,
      fecha: this.NotaForm.get('fecha')?.value,
  }
  console.log(NOTAS);
  this.router.navigate(['/']);



    if (this.NotaForm.invalid){
      return Object.values(this.NotaForm.controls).forEach(control =>{
        control.markAllAsTouched();
      })
    }
   }


  get nombreNoValido(){
    return this.NotaForm.get('nombre')?.invalid && this.NotaForm.get('nombre')?.touched;
   }

   get tituloNoValido(){
    return this.NotaForm.get('titulo')?.invalid && this.NotaForm.get('titulo')?.touched;
   }
   get contenidoNoValido(){
    return this.NotaForm.get('contenido')?.invalid && this.NotaForm.get('contenido')?.touched;
   }

   get fechaNoValido(){
    return this.NotaForm.get('fecha')?.invalid && this.NotaForm.get('fecha')?.touched;
   }


}


