import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './security/auth.guard';

import { FullComponent} from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component'
import { SenhaEsquecidaComponent } from './pages/senhaEsquecida/senha-esquecida/senha-esquecida.component';
import { CadastroUsuarioComponent } from './pages/cadastroUsuario/cadastro-usuario/cadastro-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ListaColecoesComponent } from './pages/colecoes/lista-colecoes/lista-colecoes.component';
import { CriarColecaoComponent } from './pages/criar-colecao/criar-colecao/criar-colecao.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { CriarModeloComponent } from './pages/criar-modelo/criar-modelo.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', component: FullComponent, canActivate: [AuthGuard],
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'colecoes', component: ListaColecoesComponent},
    {path: 'colecoes/edit/:id', component:CriarColecaoComponent},
    {path: 'modelos', component: ModelosComponent},
    {path: 'modelos/edit/:id', component: CriarModeloComponent},
  ]},
  {path: 'login', component: ContentComponent, children:[
    {path: '', component: LoginComponent },
    {path: 'password', component: SenhaEsquecidaComponent},
    {path: 'new-user', component: CadastroUsuarioComponent}
  ]},
  {path: '**', component: NotFoundComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
