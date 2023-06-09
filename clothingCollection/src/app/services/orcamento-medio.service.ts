import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { API_PATH } from 'src/environments/environments';

import { IColecoes } from '../interfaces/colecoes';


@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  public soma!: number;
  public media!: number;

  constructor(private _httpClient: HttpClient) {}

  listaColecoes(): Observable<IColecoes[]> {
    return this._httpClient.get<IColecoes[]>(`${API_PATH}/colecoes`);
  }

  async contaTotal(): Promise<number | any> {
    this.soma = 0;
    this.media = 0;

    try {
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        for(let i = 0; i < lista.length; i++) {
          let orcamento = lista[i].orcamento.valueOf();
          this.soma = this.soma + orcamento;
        }
        this.media = this.soma/lista.length;
        return this.media;
      }
    } catch (e) {
      return this.media;
    }
  }
}
