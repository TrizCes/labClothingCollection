import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})

export class CadastroUsuarioComponent implements OnInit {

  cadastroForm!: FormGroup;
  senhasDiferentes!: boolean;
  id!: number;

  constructor (private _fb: FormBuilder, private _cadUsuarioServ: CadastroUsuarioService, private _router : Router){}

  ngOnInit(): void {
      this.criarNovoUsuario();
  };

  criarNovoUsuario(): void {
    this.cadastroForm = new FormGroup ({
      id: new FormControl (this.id),
      usuario: new FormControl ('', [Validators.required]),
      empresa: new FormControl ('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      confirmeSenha: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      cnpj: new FormControl ( '', [Validators.required])
    });
  }

  criarID(): number {
    return this.id = Math.round((Math.random() * 10000));
  }

  cadastrar(){
  this.criarID();
  if(!this.cadastroForm.valid){
   window.alert('Dados invalidos, tente novamente')
    return
  } else if(this.cadastroForm.value.senha != this.cadastroForm.value.confirmeSenha){
    this.senhasDiferentes = true;
    return
  }
  const usuario : IUsuario[] = this.cadastroForm.value
  this._cadUsuarioServ.novoCadastro(usuario);
  setTimeout(() => {
    this._router.navigate(['../login'])
  }, 400);
  }
}
