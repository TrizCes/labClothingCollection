import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interfaces/usuario';
import { API_PATH } from '../../environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private statusLogin: boolean = false;
  private numeroUsuarios!: number;

  constructor(private router: Router, private _httpClient: HttpClient) {}

  pegarLista(): Observable<IUsuario[]> {
    return this._httpClient.get<IUsuario[]>(`${API_PATH}/usuarios`);
  }

  async login(usuario : IUsuario): Promise<boolean> {
    try {
      const listaUsuarios = await this.pegarLista().toPromise();
      if(listaUsuarios){
        this.numeroUsuarios = listaUsuarios.length;
        for (let i = 0; i < this.numeroUsuarios; i++) {
          if (listaUsuarios[i].email === usuario.email && listaUsuarios[i].senha === usuario.senha) {
            this.statusLogin = true;
            window.localStorage.setItem('email', usuario.email);
            window.localStorage.setItem('statusLogin', 'true');
            this.router.navigate(['dashboard']);
            return true;
          }
        }
      }
      console.error('Credenciais inválidas');
      return false;
    } catch (error) {
      console.error(error);
      return false;
    };
  };

  logout(){
    console.log("logout");
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}

