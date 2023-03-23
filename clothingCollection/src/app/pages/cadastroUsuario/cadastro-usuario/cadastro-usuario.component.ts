import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})

export class CadastroUsuarioComponent implements OnInit {

  cadastroForm!: FormGroup;
  senhasDiferentes!: boolean;

  constructor (private _router: Router, private _fb: FormBuilder){}

  ngOnInit(): void {
    this.criarNovoUsuario();
  };

  criarNovoUsuario(): void {
    this.cadastroForm = new FormGroup ({
      usuario: new FormControl ('', [Validators.required]),
      empresa: new FormControl ('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      confirmeSenha: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      cnpj: new FormControl ( '', [Validators.required])
    });
  }

  cadastrar(){
    console.log(this.cadastroForm.value);
    if(!this.cadastroForm.valid){
      alert('Dados invalidos, tente novamente')
      return
    } else if(this.cadastroForm.value.senha != this.cadastroForm.value.confirmeSenha){
      this.senhasDiferentes = true;
      return
    }
    console.log("cheguei aqui");

  }
}
