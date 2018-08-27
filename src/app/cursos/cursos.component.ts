import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
      this.nomePortal = 'http://google.com.br';

      this.cursos = this.cursosService.getCursos();
      for (let i = 0; i < this.cursos.length; i++) {
        const curso = this.cursos[i];
      }
      // const servico = new CursosService();
   }

  ngOnInit() {
  }

}
