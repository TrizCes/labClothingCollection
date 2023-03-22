import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senha-esquecida',
  templateUrl: './senha-esquecida.component.html',
  styleUrls: ['./senha-esquecida.component.scss'],
})
export class SenhaEsquecidaComponent implements OnInit {

  public requesitarSenha!: FormGroup;
  public texto!: string;
  public textoInicial: string =
    'Digite o e-mail associado à sua conta e enviaremos instruções para redefinir sua senha.';
  public textoAposAc: string =
    'Um link para redefinição de senha foi enviado para o e-mail';

  public mostraForm: boolean = true;
  public mostraBotao: boolean = false;

  constructor(private _router: Router){}

  ngOnInit(): void {
    this.texto = this.textoInicial;
    this.criarForm();
  }

  criarForm() {
    this.requesitarSenha = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  requisitar() {
    if (!this.requesitarSenha.valid) {
      console.error('Formato digitado inválido');
    }
    this.texto = `${this.textoAposAc} ${this.requesitarSenha.value.email}`;
    this.mostraForm = false;
    this.mostraBotao = true;
  }

  redirecionar(){
    this._router.navigate(['login']);
  }
}
