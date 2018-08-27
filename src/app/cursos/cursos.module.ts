import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { Cursos1Component } from '../cursos1/cursos1.component';

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
  ]
})
export class CursosModule { }
