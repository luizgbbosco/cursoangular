import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos1',
  templateUrl: './cursos1.component.html',
  styleUrls: ['./cursos1.component.css']
})
export class Cursos1Component implements OnInit {

  animeList: string[] = ['Naruto', 'Bleach', 'Dragon Ball'];

  constructor() {
    for (let i = 0; i < this.animeList.length; i++) {
      const animes = this.animeList[i];
    }
  }

  ngOnInit() {
  }

}
