import { Component } from '@angular/core';

@Component({
  selector: 'app-pointclick',
  templateUrl: './pointclick.component.html',
  styleUrls: ['./pointclick.component.css']
})
export class PointclickComponent {

  res:string="";
  recepcion(valor:string){
    this.res = valor
  }
}
