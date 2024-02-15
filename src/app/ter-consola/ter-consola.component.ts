import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ter-consola',
  templateUrl: './ter-consola.component.html',
  styleUrls: ['./ter-consola.component.css']
})
export class TERConsolaComponent {

  @Output() datosEnviados = new EventEmitter<string>();

  enviarDatos(){
    this.datosEnviados.emit("he seleccionado el personaje ");
  }
}
