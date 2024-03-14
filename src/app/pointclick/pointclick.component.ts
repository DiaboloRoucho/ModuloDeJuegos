import { Component } from '@angular/core';

@Component({
  selector: 'app-pointclick',
  templateUrl: './pointclick.component.html',
  styleUrls: ['./pointclick.component.css']
})
export class PointclickComponent {

  res:string="";
  volv:string = "";
  volver:boolean=false;
  recepcion(valor:string){
    this.res = valor
    if(valor =="Perdiste")
    this.volv="Volver a jugar"
  }
  volverjugar(){
    location.reload();
}
}
