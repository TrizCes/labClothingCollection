import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { API_PATH } from 'src/environments/environments';

import { IColecoes } from '../interfaces/colecoes';
import { IModelos } from 'src/app/interfaces/modelos';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  public numero!: number;

  constructor(private _httpClient: HttpClient) {}

  listaColecoes(): Observable<IColecoes[]> {
    return this._httpClient.get<IColecoes[]>(`${API_PATH}/colecoes`);
  }

  async contaTotal(): Promise<number | any> {
    this.numero = 0;
    try {
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        for(let i = 0; i < lista.length; i++) {
          let contaModelos = lista[i].modelos.length;
          this.numero = this.numero + contaModelos;
        }
        return this.numero;
      }
    } catch (e) {
      return this.numero;
    }
  }
}
