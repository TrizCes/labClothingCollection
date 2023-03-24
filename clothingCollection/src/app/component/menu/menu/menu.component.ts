import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rotaAtual: string = this._router.url

  constructor(private _router: Router, public _rotaAtiva : ActivatedRoute){}

  ngOnInit(): void {

  }

}
