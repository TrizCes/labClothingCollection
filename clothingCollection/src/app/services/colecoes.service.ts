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

  cadastrarColecao(colecao: IColecoes): void{
    this._httpClient.post<IColecoes>(`${API_PATH}/colecoes`, colecao).subscribe(
      () => {console.log('Success'), window.alert('Cadastro de coleção realizado!')},
      (error: any) => console.error('Error:', error));
  }

  atualizarColecao(colecao: IColecoes): void {
    this._httpClient.put<IColecoes>(`${API_PATH}/colecoes/${colecao.id}`, colecao).subscribe(
      () => {console.log('Success'), window.alert('Atualização de coleção realizada!')},
      (error: any) => console.error('Error:', error));
  }

  deletarColecao(id: number){
    this._httpClient.delete<IColecoes>(`${API_PATH}/colecoes/${id}`).subscribe(
      () => {console.log('Success'), window.alert('Coleção deletada!')},
      (error: any) => console.error('Error:', error));

  }
}
