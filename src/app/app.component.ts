import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModuloDeJuegos';
  rutasAleatorias:String[] = [
    "/piedra-papel-tijera",
    "/menu-inicial",
    "",
    "/kdnskjsndafknasdkfnksdanfkjsn"
  ];
  constructor(private router:Router){//servicios

  } 
  cambiarruta(){
    this.router.navigate([this.rutasAleatorias[Math.round(Math.random()*4)]]);
  }
}
