import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.css']
})
export class TresEnRayaComponent {
  datosDelHijo:String="";
  rejugar:String="";
  volver:boolean=false;
recibirDatos (datos:string){

  this.datosDelHijo = datos;
  if(datos =="Ganaste" || datos == "Perdiste")
  this.rejugar = "Volver a jugar"

  
}
limpiar(){
  window.location.reload();
}
  
}
