import { Component } from '@angular/core';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})

export class Vista1Component {
  lista = [1, 2, 3, 4, 5];

  listaN = [
    { nombre: "Diego", estado: "activo" },
    { nombre: "Pepe", estado: "inactivo" }
  ];

  public cambiaColor(estado: string) { 
    return estado === "activo" ? "green" : "red";
  }


}
