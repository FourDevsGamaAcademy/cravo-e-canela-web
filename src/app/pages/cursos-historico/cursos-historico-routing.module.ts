import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cursos-historico', component: CursoListaComponent},
  {path: 'cursos-lista', component: CursoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosHistoricoRoutingModule { }
