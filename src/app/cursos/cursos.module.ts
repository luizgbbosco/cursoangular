import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { Cursos1Component } from '../cursos1/cursos1.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    Cursos1Component
  ],
  exports: [
    CursosComponent,
    Cursos1Component
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
