import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrarDispositivosComponent } from './cadastrar-dispositivos/cadastrar-dispositivos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutAcessoComponent } from './layout-acesso/layout-acesso.component';
import { LayoutInicioComponent } from './layout-inicio/layout-inicio.component';

const routes: Routes = [
  {path: 'inicio', component: LayoutInicioComponent,
    children: [
      {path: 'acao', component: InicioComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent},
    ]
  },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'acesso', component: LayoutAcessoComponent,
    children: [
      {path: 'cadastro-dispositivo', component: CadastrarDispositivosComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
