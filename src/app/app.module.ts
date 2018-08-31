import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { DiretivangswitchComponent } from './diretivangswitch/diretivangswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DiretivangswitchComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
