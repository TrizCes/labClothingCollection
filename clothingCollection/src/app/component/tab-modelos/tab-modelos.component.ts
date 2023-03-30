import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IModelos } from 'src/app/interfaces/modelos';

import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-tab-modelos',
  templateUrl: './tab-modelos.component.html',
  styleUrls: ['./tab-modelos.component.scss']
})
export class TabModelosComponent implements OnInit {

  modelos!: IModelos[];

  constructor(private _router: Router, private _modelosService : ModelosService){}

  ngOnInit(): void {
    this.obterDadosModelos()
  }

    async obterDadosModelos() {
    try {
      this.modelos = await this._modelosService.obterModelos();
    } catch (e) {
      console.log(e)
    }
  }

  editaModelos(modelo : IModelos){
    this._router.navigate([`modelos/edit/${modelo.id}`]);
  }
}
