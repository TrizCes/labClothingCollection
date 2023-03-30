import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  };

  createLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }


  logar(){
    if (!this.loginForm.valid) {
      console.error("Erro em logar");
      return;
    }
    console.log('Logando')
    this._authService.login(this.loginForm.value)
  }
}
