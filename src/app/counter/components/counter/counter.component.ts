import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <!-- Dentro de los paréntesis se esècifica el evento, y luego que accion se realizara al ejecutarse el evento, en este caso al oprimirse el click se ejecuta el método "increaseBy" -->
    <button (click)="increaseBy( +1 )" > +1 </button>
    <button (click)="resetCounter()">RESET</button>
    <button (click)="increaseBy( -1 )"> -1 </button>
  `
})
export class CounterComponent{
  public counter : number = 10;
  increaseBy( value : number ) : void {
    this.counter += value;
}

resetCounter () : number {
  return this.counter = 10;
}
}
