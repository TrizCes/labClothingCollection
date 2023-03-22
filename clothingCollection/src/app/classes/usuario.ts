export class UsuarioClass {
  email: string;
  senha: string;
  usuario?: string;
  empresa?: string;
  cnpj?: number;

  constructor(email: string, senha: string, usuario?: string, empresa?: string, cnpj?: number) {
    this.email = email;
    this.senha = senha;
    this.usuario = usuario;
    this.empresa = empresa;
    this.cnpj = cnpj;
}
}
