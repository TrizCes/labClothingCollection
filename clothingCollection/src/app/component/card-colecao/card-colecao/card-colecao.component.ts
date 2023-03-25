import { Component, OnInit } from '@angular/core';
import { ColecoesService } from '../../../services/colecoes.service';

@Component({
  selector: 'app-card-colecao',
  templateUrl: './card-colecao.component.html',
  styleUrls: ['./card-colecao.component.scss'],
})
export class CardColecaoComponent implements OnInit {
  total!: any;

  constructor(private _colecoesService: ColecoesService) {}

  ngOnInit(): void {
    this.pegaTotal();
  }

  pegaTotal() {
    return this._colecoesService
      .contaTotal()
      .then((a) => (this.total = a))
      .catch((e) => console.log(e));
  }
}
