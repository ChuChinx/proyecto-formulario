import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './modulos/formulario/formulario.component';
import { LoginComponent } from './modulos/login/login.component';

export class AppRoute { 
  static readonly LOGIN = 'login';
  static readonly FORMULARIO = 'formulario';
}

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path: AppRoute.FORMULARIO, component: FormularioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
