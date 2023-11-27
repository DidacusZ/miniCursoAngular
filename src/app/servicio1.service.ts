import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor() { }

  private nombresPrivados=["diego","alberto","perico"]

  getNombre():string[]{
    return this.nombresPrivados
  }
}
