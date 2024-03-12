import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ter-consola',
  templateUrl: './ter-consola.component.html',
  styleUrls: ['./ter-consola.component.css']
})
export class TERConsolaComponent implements OnInit{
  posiciones:string[]=[
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png",
  "/assets/punto.png"];
  resultado:string="";
  eleccionM:number=0;
  contador:number=0;
  contador2:number=0
  ngOnInit(): void {
    this.resultado = "Holaa!!"
    this.enviarDatos(this.resultado);
  }

 seleccion(x:number){
  this.posiciones[x]="/assets/o.png";
  do
  this.eleccionM = Math.round(Math.random()*8);
  while(this.posiciones[this.eleccionM] != "/assets/punto.png")
  this.posiciones[this.eleccionM]="/assets/x.png";
  if(
    this.posiciones[0]==this.posiciones[2]&&this.posiciones[0]==this.posiciones[1]&&this.posiciones[0]=="/assets/o.png"||
    this.posiciones[3]==this.posiciones[4]&&this.posiciones[3]==this.posiciones[5]&&this.posiciones[3]=="/assets/o.png"||
    this.posiciones[6]==this.posiciones[7]&&this.posiciones[6]==this.posiciones[8]&&this.posiciones[6]=="/assets/o.png"||
    this.posiciones[0]==this.posiciones[4]&&this.posiciones[0]==this.posiciones[8]&&this.posiciones[0]=="/assets/o.png"||
    this.posiciones[6]==this.posiciones[4]&&this.posiciones[6]==this.posiciones[2]&&this.posiciones[6]=="/assets/o.png"||
    this.posiciones[0]==this.posiciones[3]&&this.posiciones[0]==this.posiciones[6]&&this.posiciones[0]=="/assets/o.png"||
    this.posiciones[1]==this.posiciones[4]&&this.posiciones[1]==this.posiciones[7]&&this.posiciones[1]=="/assets/o.png"||
    this.posiciones[2]==this.posiciones[5]&&this.posiciones[2]==this.posiciones[8]&&this.posiciones[2]=="/assets/o.png"){
    this.resultado="Ganaste";
    this.enviarDatos(this.resultado);
    }
    if(
      this.posiciones[0]==this.posiciones[2]&&this.posiciones[0]==this.posiciones[1]&&this.posiciones[0]=="/assets/x.png"||
      this.posiciones[3]==this.posiciones[4]&&this.posiciones[3]==this.posiciones[5]&&this.posiciones[3]=="/assets/x.png"||
      this.posiciones[6]==this.posiciones[7]&&this.posiciones[6]==this.posiciones[8]&&this.posiciones[6]=="/assets/x.png"||
      this.posiciones[0]==this.posiciones[4]&&this.posiciones[0]==this.posiciones[8]&&this.posiciones[0]=="/assets/x.png"||
      this.posiciones[6]==this.posiciones[4]&&this.posiciones[6]==this.posiciones[2]&&this.posiciones[6]=="/assets/x.png"||
      this.posiciones[0]==this.posiciones[3]&&this.posiciones[0]==this.posiciones[6]&&this.posiciones[0]=="/assets/x.png"||
      this.posiciones[1]==this.posiciones[4]&&this.posiciones[1]==this.posiciones[7]&&this.posiciones[1]=="/assets/x.png"||
      this.posiciones[2]==this.posiciones[5]&&this.posiciones[2]==this.posiciones[8]&&this.posiciones[2]=="/assets/x.png"){
    this.resultado="Perdiste"
    this.enviarDatos(this.resultado);
    }
  } 
  limpiar(x:boolean){
    if(x)
      while(this.contador2<=8){
    this.posiciones[this.contador2]="/assets/punto.png";
    this.contador2++;}
    this.contador2=0;
  }
  

  @Output() datosEnviados = new EventEmitter<string>();
  @Input() vjugar:boolean = false;

  enviarDatos(valor:string){
    this.datosEnviados.emit(valor);
  }
}
