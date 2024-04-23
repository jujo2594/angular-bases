import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name : string = 'ironman';
  public age : number = 45;
  public heroList : string[] = ['Spiderman', 'Batman', 'Hulk', 'Flash'];
  private currentHeroIndex : number = 0;

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription () : string {
    return `El nombre del heroe es ${this.name} y tiene ${this.age} años`;
  }

  changeHero() : void {
    //cambiar el nombre del heroe
    // this.name = this.heroList[this.currentHeroIndex];
    // console.log(this.name);
    // this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroList.length;
    this.name = 'Spiderman';
  }

  changeAge() : void {
    //cambiar la edad del heroe
    // this.age = Math.floor(Math.random() * (48 - 18 + 1) + 18);
    this.age = 25;
  }

  resetInfo() : void {
    this.name = 'ironman';
    this.age = 45;
  }

}
