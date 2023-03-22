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


import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    NotFoundComponent,
    LoginComponent,
    SenhaEsquecidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  providers: [AuthService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
