import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { API_PATH } from 'src/environments/environments';

import { IColecoes } from '../interfaces/colecoes';

@Injectable({
  providedIn: 'root',
})
export class ColecoesService {
  public numero!: number;

  constructor(private _httpClient: HttpClient) {}

  listaColecoes(): Observable<IColecoes[]> {
    return this._httpClient.get<IColecoes[]>(`${API_PATH}/colecoes`);
  }

  async contaTotal(): Promise<number | any> {
    try {
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        this.numero = lista.length;
        return this.numero;
      }
    } catch (e) {
      return this.numero;
    }
  }

  async obterColecoes(): Promise< IColecoes[] | any >{
    try{
      const colecoes = await this.listaColecoes().toPromise();
      if(colecoes){
        return colecoes
      }
    } catch (err){
      return;
    }
  }
}
