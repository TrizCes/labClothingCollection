import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormColecaoComponent } from 'src/app/component/form-colecao/form-colecao/form-colecao.component';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { IColecoes } from 'src/app/interfaces/colecoes';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent {

  colecao!: IColecoes;

  @ViewChild (FormColecaoComponent, {static: false}) formColecao!: FormColecaoComponent;

  constructor(private _colecoesService : ColecoesService){};

  salvaColecao(colecao: FormGroup){
    if(!colecao){
      window.alert('Erro em salvar a coleção')
    }
    this._colecoesService.cadastrarColecao(colecao.value);
  }

}
