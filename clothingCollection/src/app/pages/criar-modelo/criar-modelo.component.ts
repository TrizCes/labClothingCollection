import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModeloComponent } from 'src/app/component/form-modelo/form-modelo.component';
import { ModelosService } from 'src/app/services/modelos.service';


@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent {

  @ViewChild (FormModeloComponent, {static: false}) formModelo!: FormModeloComponent;

  constructor(private _modelosService : ModelosService){}

  salvaModelo(modelo: FormGroup){
    if(!modelo){
      window.alert('Erro em salvar o modelo')
    }
    this._modelosService.cadastrarModelo(modelo.value);
  }

}
