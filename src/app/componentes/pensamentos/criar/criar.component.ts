import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarComponent implements OnInit {


  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert(this.pensamento.autoria + " - " + this.pensamento.conteudo)
  }

  cancelar() {
    alert(this.pensamento.autoria)
    }
}
