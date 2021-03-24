import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase01';
  edadUno = '';
  edadDos = '';
  suma = 0;
  prom = 0;
 

HacerCambios()
{
  this.title = "Angular 2021";
}

SumarEdad()
{
  this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);


}

PromedioEdad()
{
  this.prom = this.suma / 2;

}

Limpiar()
{
  this.edadUno = '';
  this.edadDos = '';
  this.suma = 0;
  this.prom = 0;

}


}

export class Usuario {

  public nombre: string;
  public clave: string;

  public constructor() {
    this.nombre = '';
    this.clave = '';

  }
}