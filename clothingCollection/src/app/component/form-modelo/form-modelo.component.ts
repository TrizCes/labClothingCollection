import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ColecoesService } from 'src/app/services/colecoes.service';

import { IColecoes } from 'src/app/interfaces/colecoes';
import { IModelos } from 'src/app/interfaces/modelos';

@Component({
  selector: 'app-form-modelo',
  templateUrl: './form-modelo.component.html',
  styleUrls: ['./form-modelo.component.scss']
})

export class FormModeloComponent implements OnInit {

  colecoes!: IColecoes[];
  modeloForm!: FormGroup;
  id!: number;
  tipos: string[] = ['Bermuda', 'Biquíni', 'Bolsa', 'Boné', 'Calça', 'Calçados', 'Camisa', 'Chapéu', 'Saia' ];
  editaModelo: boolean = false;


  @Output('salvaModelo') salvaModelo = new EventEmitter<FormGroup>();
  @Output('alterarModelo') alterarModelo = new EventEmitter<FormGroup>();
  @Output('deletarModelo') deletarModelo = new EventEmitter<FormGroup>();

  constructor(private _router: Router, private _colecoesService: ColecoesService){}

  ngOnInit(): void {
    this.obterColecoes();
    this.cadastroModelo();
  };

  async obterColecoes() {
    try {
      this.colecoes = await this._colecoesService.obterColecoes();
    } catch (e) {
      console.log(e)
    }
  }

  cadastroModelo(): void{
    if(!this.editaModelo){
      this.criarID();
    }
    this.modeloForm = new FormGroup ({
      id: new FormControl (this.id, [Validators.required]),
      nome: new FormControl ('', [Validators.required]),
      responsavel: new FormControl ('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      colecao: new FormControl ( '' , [Validators.required]),
      bordado: new FormControl ('', [Validators.required]),
      estampa: new FormControl ('', [Validators.required]),
    });
  }

  salva() {
     if(!this.modeloForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    }

    this.salvaModelo.emit(this.modeloForm);
    setTimeout(() => {
      this._router.navigate(['../modelos'])
    }, 300);
    return
  }

  alterar(){
    if(!this.modeloForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    }

    this.alterarModelo.emit(this.modeloForm);
    setTimeout(() => {
      this._router.navigate(['../modelos'])
    }, 450);
    return
  }

  deletar(){
    if(!this.modeloForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    }

    this.deletarModelo.emit(this.modeloForm);
    setTimeout(() => {
      this._router.navigate(['../modelos'])
    }, 450);
    return
  }

  criarID(): number {
    return this.id = Math.round((Math.random() * 10000));
  }

  completaForm(modelo: IModelos):void{
    this.editaModelo = true;
    try{
      this.id = modelo.id;
      this.modeloForm.get(['id'])?.setValue(this.id);
      this.modeloForm.get(['nome'])?.setValue(modelo.nome);
      this.modeloForm.get(['responsavel'])?.setValue(modelo.responsavel);
      this.modeloForm.get(['tipo'])?.setValue(modelo.tipo);
      this.modeloForm.get(['colecao'])?.setValue(modelo.colecao);
      this.modeloForm.get(['bordado'])?.setValue(modelo.bordado);
      this.modeloForm.get(['estampa'])?.setValue(modelo.estampa);
    }catch{
      window.alert('Erro ao carregar');
    }
}

}
