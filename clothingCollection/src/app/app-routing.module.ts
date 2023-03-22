import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent} from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
<<<<<<< Updated upstream

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: FullComponent, children: [

  ]},
  {path: 'login', component: ContentComponent, children:[

=======
import { LoginComponent } from './pages/login/login.component'
import { AuthGuard } from './security/auth.guard';
import { SenhaEsquecidaComponent } from './pages/senhaEsquecida/senha-esquecida/senha-esquecida.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: FullComponent, canActivate: [AuthGuard],
  children: [

  ]},
  {path: 'login', component: ContentComponent, children:[
    {path: '', component: LoginComponent },
    {path: 'password', component: SenhaEsquecidaComponent}
>>>>>>> Stashed changes
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
