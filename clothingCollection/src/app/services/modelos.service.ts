import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_PATH } from 'src/environments/environments';

import { IColecoes } from '../interfaces/colecoes';
import { IModelos } from 'src/app/interfaces/modelos';

@Injectable({
  providedIn: 'root',
})
export class ModelosService {

  public numero!: number;

  public modelosTotal: IModelos[] = [];

  public colecaoID!: number;

  constructor(private _httpClient: HttpClient) {}

  listaColecoes(): Observable<IColecoes[]> {
    return this._httpClient.get<IColecoes[]>(`${API_PATH}/colecoes`);
  }

  async contaTotal(): Promise<number | any> {
    this.numero = 0;
    try {
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        for (let i = 0; i < lista.length; i++) {
          let contaModelos = lista[i].modelos.length;
          this.numero = this.numero + contaModelos;
        }
        return this.numero;
      }
    } catch (e) {
      return this.numero;
    }
  }

  async obterModelos(): Promise<IModelos[] | any> {
    try {
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        for (let i = 0; i < lista.length; i++) {
          lista[i].modelos.forEach((modelo) => {
            this.modelosTotal.push(modelo);
          });
        }
        return this.modelosTotal;
      }
    } catch (e) {
      console.log(e);
      return this.modelosTotal;
    }
  }

  async cadastrarModelo(modelo: IModelos): Promise<void>{
    let colecaoNome = modelo.colecao;
    try{
      const lista = await this.listaColecoes().toPromise();
      if (lista) {
        lista.forEach(colecao => {
          if(colecao.nome === colecaoNome){
            colecao.modelos.push(modelo);
            let id = colecao.id;
            this._httpClient.patch<IColecoes>(`${API_PATH}/colecoes/${id}`, colecao).subscribe(
              () => {console.log('Success'), window.alert('Cadastro de modelo realizado!')},
              (error: any) => console.error('Error:', error));
          }
        })
      }
    }catch(e){
      console.log(e);
    }
  }
}
