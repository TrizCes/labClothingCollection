import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { FormColecaoComponent } from 'src/app/component/form-colecao/form-colecao/form-colecao.component';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { IColecoes } from 'src/app/interfaces/colecoes';


@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit {

  colecoes!: IColecoes[];
  colecao!: IColecoes;
  definidoID: boolean = false;
  id!: number;
  delete: boolean = false;

  @ViewChild (FormColecaoComponent, {static: false}) formColecao!: FormColecaoComponent;

  constructor(private _colecoesService : ColecoesService, private _activateRoute : ActivatedRoute, private _router : Router){};

   ngOnInit(){
    this.estilizaRota();

  };

  salvaColecao(colecao: FormGroup){
    if(!colecao){
      window.alert('Erro em salvar a coleção')
    }
    this._colecoesService.cadastrarColecao(colecao.value);
  }

  async estilizaRota(){
    this.definidoID = this._activateRoute.snapshot.params.hasOwnProperty('id') && this._activateRoute.snapshot.params['id'] != ':id';
    this.id = await this._activateRoute.snapshot.params['id'];
    if(this.definidoID){
      await this.obterColecoes();
    }
  }

  async obterColecoes() {
    try {
      this.colecoes = await this._colecoesService.obterColecoes();
      if(this.colecoes){
        for (let i = 0; i < this.colecoes.length; i++){
          if(this.colecoes[i].id == this.id){
            this.colecao = this.colecoes[i];
            this.formColecao.completaForm(this.colecao);
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  };

  atualizaColecao(colecao: FormGroup){
    if(!colecao){
      window.alert('Erro em salvar a coleção')
    }
    this._colecoesService.atualizarColecao(colecao.value);
  }

  deletar(){
    this._colecoesService.deletarColecao(this.id);
    setTimeout(() => {
      this._router.navigate(['../colecoes'])
    }, 400); //add tempo para atualizar o db.json, pois se não tela exibe dados antigos
  }

}
