<<<<<<< Updated upstream
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
=======
import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rotaAtual: string = this._router.url

<<<<<<< Updated upstream
  constructor(private _router: Router, public _rotaAtiva : ActivatedRoute, private _Location : Location){}

  ngOnInit(): void {
    this._Location.onUrlChange(() => this.rotaAtual= this._router.url)
  }


=======
  constructor(private _router: Router, private _Location : Location){}

  ngOnInit(): void {
    this._Location.onUrlChange((url) => this.rotaAtual = url);
  }
>>>>>>> Stashed changes
}
