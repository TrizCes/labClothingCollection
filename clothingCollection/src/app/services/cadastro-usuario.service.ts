import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_PATH } from 'src/environments/environments';

import { IUsuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private _http: HttpClient) { }

  novoCadastro(formCadastro: IUsuario[]){
    console.log('cadastrando novo usuario:');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.post<IUsuario>(`${API_PATH}/usuarios`, formCadastro, {headers}).subscribe(
      () => console.log('Success'),
      (error: any) => console.error('Error:', error));
   }
}
