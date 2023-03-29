import { Component, OnInit } from '@angular/core';
import { ModelosService } from 'src/app/services/modelos.service';


@Component({
  selector: 'app-card-modelos',
  templateUrl: './card-modelos.component.html',
  styleUrls: ['./card-modelos.component.scss']
})
export class CardModelosComponent implements OnInit {

  total!: any;

  constructor(private _modelosService: ModelosService) {}

  ngOnInit(): void {
    this.pegaTotal();
  }

  pegaTotal() {
    return this._modelosService.contaTotal().then((a) => (this.total = a)).catch((e) => console.log(e));
  }
}
