import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IColecoes } from 'src/app/interfaces/colecoes';



@Component({
  selector: 'app-form-colecao',
  templateUrl: './form-colecao.component.html',
  styleUrls: ['./form-colecao.component.scss']
})
export class FormColecaoComponent implements OnInit {

  colecaoForm!: FormGroup;
  colecao!: IColecoes;
  id!: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  orcamento!: number;
  ano!: number;
  modelos: any[] = [];
  editaColecao: boolean = false;

  @Output('salvaColecao') salvaColecao = new EventEmitter<FormGroup>();
  @Output('atualizaColecao') atualizaColecao = new EventEmitter<FormGroup>();

  constructor(private _router : Router){};

  ngOnInit(): void {
    this.cadastroColecao();
  }

  cadastroColecao(): void{
    if(!this.editaColecao){
      this.criarID();
    }
    this.colecaoForm = new FormGroup ({
      id: new FormControl (this.id, [Validators.required]),
      nome: new FormControl ('', [Validators.required]),
      responsavel: new FormControl ('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      estacao: new FormControl ('', [Validators.required]),
      ano: new FormControl (Number, [Validators.required, Validators.minLength(4)]),
      orcamento: new FormControl ( Number, [Validators.required]),
      modelos: new FormControl (this.modelos)
    });
  }

  salva() {
    if(!this.colecaoForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    }
    this.salvaColecao.emit(this.colecaoForm);
    setTimeout(() => {
      this._router.navigate(['../colecoes'])
    }, 250);

  }

  criarID(): number {
    return this.id = Math.round((Math.random() * 1000));
  }

  completaForm(colecaoAtual : any):void{
    this.editaColecao = true;
    try{
      this.id = colecaoAtual.id;
      this.colecaoForm.get(['id'])?.setValue(this.id);
      this.colecaoForm.get(['nome'])?.setValue(colecaoAtual.nome);
      this.colecaoForm.get(['responsavel'])?.setValue(colecaoAtual.responsavel);
      this.colecaoForm.get(['marca'])?.setValue(colecaoAtual.marca);
      this.colecaoForm.get(['estacao'])?.setValue(colecaoAtual.estacao);
      this.colecaoForm.get(['orcamento'])?.setValue(colecaoAtual.orcamento);
      this.colecaoForm.get(['ano'])?.setValue(colecaoAtual.ano);
      this.colecaoForm.get(['modelos'])?.setValue(colecaoAtual.modelos);
    }catch{
      window.alert('Erro ao carregar');
    }
  }

  atualiza(){
    if(!this.colecaoForm.valid){
      alert('Erro, entre em contato com o suporte 0800-999-999')
      return
    }
    this.atualizaColecao.emit(this.colecaoForm);
    setTimeout(() => {
      this._router.navigate(['../colecoes'])
    }, 400); //tempo para atualizar o db.json
  }

}
