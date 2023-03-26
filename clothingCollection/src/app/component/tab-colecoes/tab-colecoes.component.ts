import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IColecoes } from 'src/app/interfaces/colecoes';

import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-tab-colecoes',
  templateUrl: './tab-colecoes.component.html',
  styleUrls: ['./tab-colecoes.component.scss']
})
export class TabColecoesComponent implements OnInit {

  public colecoes!: [];
  public id: number = 0;
  public colecao!: string;
  public responsavel!: string;
  public estacao!: string;
  public lancamento!:number;
  public modelos!: number;
  public orcamento!: number;

  constructor(private _colecoesService: ColecoesService, private _router : Router, private _activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.obterDadosTabela();

  }

  async obterDadosTabela(){
    try{
      this.colecoes = await this._colecoesService.obterColecoes()
      this.colecoes.forEach((colecao : IColecoes) => {
        this.id = colecao.id;
        this.colecao = colecao.nome;
        this.responsavel = colecao.responsavel;
        this.estacao = colecao.estacao;
        this.lancamento = colecao.ano;
        this.modelos = colecao.modelos.length;
        this.orcamento = colecao.orcamento;

        const tabela = document.getElementById("tbody")
        if(tabela){
          const tr = document.createElement("tr");
          tr.id = `${this.id}`;
          tr.addEventListener('click', () => {
            this._router.navigate([`colecoes/edit/:id`])
          });

          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");
          const td5 = document.createElement("td");

          td1.innerHTML = this.colecao;
          td2.innerHTML = this.responsavel;
          td3.innerHTML = `${this.estacao} | ${this.lancamento}`
          td4.innerHTML = this.modelos.toString();
          td5.innerHTML = `R$ ${this.orcamento.toString()}`

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tabela.appendChild(tr);
        };
      });
    }catch(e){
      console.log(e);
    }
  };
}
