import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pantallapc',
  templateUrl: './pantallapc.component.html',
  styleUrls: ['./pantallapc.component.css']
})
export class PantallapcComponent {

  posiciones:string[]=[
    "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png",
      "/assets/punto.png"
  ];
  eleccionM:number = 0;
  tiempo:number = 5000;
  sigue:boolean = true;
  anteriorM:number = 0;
  anterior:number = 0;


  async seleccion(x:number){
    this.anterior = x
    if(this.sigue || this.posiciones[this.eleccionM] == "/assets/x.png"){
    this.posiciones[x]="/assets/o.png";
  do
  this.eleccionM = Math.round(Math.random()*24);
  while(this.posiciones[this.eleccionM] != "/assets/punto.png")
  this.posiciones[this.eleccionM]="/assets/x.png";
    await new Promise(f=> setTimeout(f, this.tiempo));
    this.tiempo *=.9;
    if(this.posiciones[this.anteriorM] == "/assets/punto.png")
    this.sigue = false;
    if(!this.sigue){
    this.posiciones[this.eleccionM]="/assets/punto.png";
    }
    this.posiciones[x]="/assets/punto.png";
    } else{
      this.enviarRes("Perdiste")
    }
  }


  @Output() resultado = new EventEmitter<string>();

  enviarRes(valor:string){
    this.resultado.emit(valor);
  }
  
}
