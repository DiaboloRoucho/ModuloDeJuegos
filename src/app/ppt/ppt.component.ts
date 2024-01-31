import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit{
  texto:string="";
  elecciones:string[]=["piedra", "papel", "tijeras"];
  eleccionesImg:string[]=["/assets/stone_839307.png", "/assets/papers_8213001.png", "/assets/scissors_3375800.png"];
  textoJ:string="";
  textoM:string="";
  textoF:string="";
  textoEmp:String="";
  vidas:vida[]=[new vida("/assets/heart_707680.png"),
  new vida("/assets/heart_707680.png"), 
  new vida("/assets/heart_707680.png"), 
  new vida("/assets/heart_707680.png"), 
  new vida("/assets/heart_707680.png")];
  

  ngOnInit(): void {
    this.texto="hola guapo";
    this.textoJ="/assets/waving-hand_9756304.png"
    this.textoM="/assets/waving-hand_9756304.png"
    this.textoEmp=""
    this.textoF=""
    this.vidas=[new vida("/assets/heart_707680.png"),
    new vida("/assets/heart_707680.png"), 
    new vida("/assets/heart_707680.png"), 
    new vida("/assets/heart_707680.png"), 
    new vida("/assets/heart_707680.png")];

  }
  elegir (eleccion:number){

    if(this.vidas.length!=0){
    var eleccionMaquina = Math.floor(Math.random()*3);

    if(this.elecciones[eleccion]=="tijeras"&& this.elecciones[eleccionMaquina]=="papel"||
    this.elecciones[eleccion]=="piedra"&& this.elecciones[eleccionMaquina]=="tijeras"||
    this.elecciones[eleccion]=="papel"&& this.elecciones[eleccionMaquina]=="piedra"){
      this.textoM=this.eleccionesImg[eleccionMaquina];
      this.textoJ=this.eleccionesImg[eleccion];
      this.texto="ganaste";
    }
    if(this.elecciones[eleccion]=="tijeras"&& this.elecciones[eleccionMaquina]=="piedra"||
    this.elecciones[eleccion]=="piedra"&& this.elecciones[eleccionMaquina]=="papel"||
    this.elecciones[eleccion]=="papel"&& this.elecciones[eleccionMaquina]=="tijeras"){
      this.textoM=this.eleccionesImg[eleccionMaquina];
      this.textoJ=this.eleccionesImg[eleccion];
      this.texto="Perdiste";
      this.vidas.pop();
      
      
    }
    if(this.elecciones[eleccion]=="tijeras"&& this.elecciones[eleccionMaquina]=="tijeras"||
    this.elecciones[eleccion]=="piedra"&& this.elecciones[eleccionMaquina]=="piedra"||
    this.elecciones[eleccion]=="papel"&& this.elecciones[eleccionMaquina]=="papel"){
      this.textoM=this.eleccionesImg[eleccionMaquina];
      this.textoJ=this.eleccionesImg[eleccion];
      this.texto="empate";
    }
  }if(this.vidas.length == 0){
        this.textoF = "Perdiste de la hostia"
        this.textoEmp = "Volver a jugar"
    }
    
  }
  volver(){

    this.ngOnInit()
  }

  
}
class vida{
  imagen:string;
  constructor(i:string){
      this.imagen = i;
  }
}


