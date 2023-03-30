import { Component, OnDestroy, OnInit } from '@angular/core';

import { IColecoes } from 'src/app/interfaces/colecoes';

import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-maiores-orcamentos',
  templateUrl: './maiores-orcamentos.component.html',
  styleUrls: ['./maiores-orcamentos.component.scss']
})
export class MaioresOrcamentosComponent implements OnInit, OnDestroy {
  public colecoes!: [];
  public colecao!: string;
  public responsavel!: string;
  public modelos!: number;
  public orcamento!: number;

  constructor(private _colecoesService: ColecoesService){}

  ngOnInit(): void {
    this.obterDadosTabela();

  }

  ngOnDestroy(): void {
    clearInterval(this.orcamento);
    clearInterval(this.modelos);
    this.colecoes = [];
  };

  async obterDadosTabela(){
    try{
      this.colecoes = await this._colecoesService.obterColecoes()
      this.colecoes = this.colecoes.sort((a : IColecoes, b : IColecoes) => b.orcamento - a.orcamento)
       const exibir = this.colecoes.slice(0, 5);
      exibir.forEach((colecao : IColecoes) => {
        this.colecao = colecao.nome;
        this.responsavel = colecao.responsavel;
        this.modelos = colecao.modelos.length;
        this.orcamento = colecao.orcamento;

        const tabela = document.getElementById("tbody")
        if(tabela){
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");

          td1.innerHTML = this.colecao;
          td2.innerHTML = this.responsavel;
          td3.innerHTML = this.modelos.toString();
          td4.innerHTML = this.orcamento.toString();

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tabela.appendChild(tr);
        };
      });
    }catch(e){
      console.log(e);
    }
  };
}
