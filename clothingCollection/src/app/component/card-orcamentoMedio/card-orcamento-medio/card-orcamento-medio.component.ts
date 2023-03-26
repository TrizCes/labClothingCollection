import { Component } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento-medio.service';

@Component({
  selector: 'app-card-orcamento-medio',
  templateUrl: './card-orcamento-medio.component.html',
  styleUrls: ['./card-orcamento-medio.component.scss']
})
export class CardOrcamentoMedioComponent {
  total!: any;

  constructor(private _orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.pegaOrcamentoM();
  }

  pegaOrcamentoM() {
    return this._orcamentoService.contaTotal().then((a) => (this.total = a)).catch((e) => console.log(e));
  }
}
