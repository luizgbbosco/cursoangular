import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // Declarações
  url = 'www.google.com.br';
  urlImagem = 'https://picsum.photos/200';
  cursoAngular = true;
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = 'Luiz';

  pessoa = {
    nome : 'Luiz',
    idade : '21'
  };

  valor = 0;
  valorbtn = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef;

  // Funções utilizadas
  getValor() {
    return 1;
  }

  getCurso() {
    return true;
  }

  botaoClicado() {
    alert('Você clicou');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  incrementa() {
    // console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
  }


  decrementa() {
    this.campoValorInput.nativeElement.value--;
  }

  constructor() { }

  ngOnInit() {
  }

}
