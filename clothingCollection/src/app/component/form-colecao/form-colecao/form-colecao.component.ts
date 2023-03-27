import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-colecao',
  templateUrl: './form-colecao.component.html',
  styleUrls: ['./form-colecao.component.scss']
})
export class FormColecaoComponent implements OnInit {

  colecaoForm!: FormGroup;
  id!: number;

  @Output('salvaColecao') salvaColecao = new EventEmitter<FormGroup>();

  constructor(private _router : Router){};

  ngOnInit(): void {
    this.cadastroColecao();
  }

  cadastroColecao(): void{
    this.criarID();
    const modelos: any[] = [];
    this.colecaoForm = new FormGroup ({
      id: new FormControl (this.id, [Validators.required]),
      nome: new FormControl ('', [Validators.required]),
      responsavel: new FormControl ('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      estacao: new FormControl ('', [Validators.required]),
      ano: new FormControl (Number, [Validators.required, Validators.minLength(4)]),
      orcamento: new FormControl ( Number, [Validators.required]),
      modelos: new FormControl (modelos)
    });
  }

  salva() {
    if(!this.colecaoForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    }
    this.salvaColecao.emit(this.colecaoForm);
    window.alert('Coleção enviada!');
    setTimeout(() => {
      this._router.navigate(['../colecoes'])
    }, 250);

  }

  criarID(): number {
    return this.id = Math.round((Math.random() * 1000));
  }
}
