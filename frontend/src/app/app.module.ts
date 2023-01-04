import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarDispositivosComponent } from './listar-dispositivos/listar-dispositivos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastrarDispositivosComponent } from './cadastrar-dispositivos/cadastrar-dispositivos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LayoutInicioComponent } from './layout-inicio/layout-inicio.component';
import { LayoutAcessoComponent } from './layout-acesso/layout-acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    CadastroComponent,
    ListarDispositivosComponent,
    DashboardComponent,
    CadastrarDispositivosComponent,
    UsuarioComponent,
    LayoutInicioComponent,
    LayoutAcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
