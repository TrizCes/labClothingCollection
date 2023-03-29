import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModeloComponent } from 'src/app/component/form-modelo/form-modelo.component';
import { IModelos } from 'src/app/interfaces/modelos';
import { ModelosService } from 'src/app/services/modelos.service';


@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent implements OnInit {

  definidoID: boolean = false;
  id!: any;
  modelos!: IModelos[];
  modelo!: IModelos;

  @ViewChild (FormModeloComponent, {static: false}) formModelo!: FormModeloComponent;

  constructor(private _modelosService : ModelosService, public _activatedRoute: ActivatedRoute, private _router: Router){}

  ngOnInit(): void {
      this.estilizaRota();
  }

  salvaModelo(modelo: FormGroup){
    if(!modelo){
      window.alert('Erro em salvar o modelo')
    }
    this._modelosService.cadastrarModelo(modelo.value);
  }

  async estilizaRota(){
    this.definidoID = this._activatedRoute.snapshot.params.hasOwnProperty('id') && this._activatedRoute.snapshot.params['id'] != ':id';
    this.id = await this._activatedRoute.snapshot.params['id'];
    console.log(this.id);

    if(this.definidoID){
      await this.obterModelos();
    }
  }

  async obterModelos(){
    try {
      this.modelos = await this._modelosService.obterModelos();
      if(this.modelos){
        this.modelos.forEach(modelo => {
         if(modelo.id == this.id) {
          this.formModelo.completaForm(modelo);
         }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  deletar(){
    this._modelosService.deletarModelo(this.id);
    setTimeout(() => {
      this._router.navigate(['../colecoes'])
    }, 400); //add tempo para atualizar o db.json, pois se não tela exibe dados antigos
  }
}
