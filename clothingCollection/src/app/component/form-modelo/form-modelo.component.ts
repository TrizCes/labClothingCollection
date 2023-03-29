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

  @Output('salvaModelo') salvaModelo = new EventEmitter<FormGroup>();

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
    this.criarID();
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
    console.log(this.modeloForm.value);

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

  criarID(): number {
    return this.id = Math.round((Math.random() * 10000));
  }

}
