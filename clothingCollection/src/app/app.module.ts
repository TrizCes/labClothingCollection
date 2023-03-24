import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SenhaEsquecidaComponent } from './pages/senhaEsquecida/senha-esquecida/senha-esquecida.component';
import { CadastroUsuarioComponent } from './pages/cadastroUsuario/cadastro-usuario/cadastro-usuario.component';

import { AuthService } from './services/auth.service';
import { CadastroUsuarioService } from './services/cadastro-usuario.service';
import { MenuComponent } from './component/menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    NotFoundComponent,
    LoginComponent,
    SenhaEsquecidaComponent,
    CadastroUsuarioComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, HttpClientModule, CadastroUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
