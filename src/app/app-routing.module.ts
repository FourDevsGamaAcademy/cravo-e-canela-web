import { CursoCadastroComponent } from './pages/cursos-historico/curso-cadastro/curso-cadastro.component';
import { CursoListaComponent } from './pages/cursos-historico/curso-lista/curso-lista.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { AlunasComponent } from './pages/alunas/alunas.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosHistoricoComponent } from './pages/cursos-historico/cursos-historico.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'empresas-cadastro', component:EmpresasComponent},
  {path:'alunas-cadastro', component:AlunasComponent},
  {path:'cursos-cadastro', component:CursoCadastroComponent},
  {path:'cursos-historico', component:CursosHistoricoComponent},
  {path:'cursos-lista', component:CursoListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
