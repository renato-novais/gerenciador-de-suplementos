import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { GerenciadorSuplementosComponent } from './gerenciador-suplementos/gerenciador-suplementos.component';

const routes: Routes = [
  {path:'',redirectTo:'entrar',pathMatch:'full'},
  {path:'entrar',component: EntrarComponent},
  {path:'sobre',component: SobreComponent},
  {path:'gerenciador-suplementos',component: GerenciadorSuplementosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
