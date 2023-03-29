import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IColecoes } from 'src/app/interfaces/colecoes';

import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-tab-colecoes',
  templateUrl: './tab-colecoes.component.html',
  styleUrls: ['./tab-colecoes.component.scss'],
})
export class TabColecoesComponent implements OnInit {
  public colecoes!: IColecoes[];

  constructor(
    private _colecoesService: ColecoesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.obterDadosTabela()
  }

    async obterDadosTabela() {
    try {
      this.colecoes = await this._colecoesService.obterColecoes();
    } catch (e) {
      console.log(e)
    }
  }

  editaColecao(colecao: IColecoes) {
    const id = colecao.id;
    this._router.navigate([`colecoes/edit/${id}`]);
  }
}
