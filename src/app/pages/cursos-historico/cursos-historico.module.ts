import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CursoService } from './../../service/curso.service';
import { SharedModule } from './../../shared/shared.module';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { CursosHistoricoComponent } from './cursos-historico.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosHistoricoRoutingModule } from './cursos-historico-routing.module';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';


@NgModule({
  declarations: [
    CursoCadastroComponent,
    CursoListaComponent,
    CursosHistoricoComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    CursosHistoricoRoutingModule,
    NgxMaskModule.forChild()
  ],
  providers:
  [
    CursoService
  ]
})
export class CursosHistoricoModule { }
