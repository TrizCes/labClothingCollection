import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento-medio.service';

@Component({
  selector: 'app-card-orcamento-medio',
  templateUrl: './card-orcamento-medio.component.html',
  styleUrls: ['./card-orcamento-medio.component.scss']
})
export class CardOrcamentoMedioComponent implements OnInit , OnDestroy {
  total!: number;

  constructor(private _orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.pegaOrcamentoM();
  }

  ngOnDestroy(): void {
    clearInterval(this.total);
  }

  pegaOrcamentoM() {
    return this._orcamentoService.contaTotal().then((a) => {
      this.total = Math.round(a);
    }).catch((e) => console.log(e));
  }
}
