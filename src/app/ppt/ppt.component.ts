import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit{
  texto:string="";
  elecciones:string[]=["piedra", "papel", "tijeras"]
  texto2:string=""
  texto3:string=""

  ngOnInit(): void {
    this.texto="hola guapo";
  }
  elegir (eleccion:string){
    this.texto="elegiste: "+eleccion;

    var eleccionMaquina = Math.floor(Math.random()*3);
    this.texto2 = "La maquina ha elegido: " + eleccionMaquina

    if(eleccion=="tijeras"&& this.elecciones[eleccionMaquina]=="papel"||
    eleccion=="piedra"&& this.elecciones[eleccionMaquina]=="tijeras"||
    eleccion=="papel"&& this.elecciones[eleccionMaquina]=="piedra"){
      this.texto3="ganaste"
    }
    if(eleccion=="tijeras"&& this.elecciones[eleccionMaquina]=="piedra"||
    eleccion=="piedra"&& this.elecciones[eleccionMaquina]=="papel"||
    eleccion=="papel"&& this.elecciones[eleccionMaquina]=="tijeras"){
      this.texto3="perdiste"
    }
    if(eleccion=="tijeras"&& this.elecciones[eleccionMaquina]=="tijeras"||
    eleccion=="piedra"&& this.elecciones[eleccionMaquina]=="piedra"||
    eleccion=="papel"&& this.elecciones[eleccionMaquina]=="papel"){
      this.texto3="empate"
    }
  }

  
}
