import { AlunasComponent } from './alunas.component';
import { AlunaCadastroComponent } from './aluna-cadastro/aluna-cadastro.component';
import { SharedModule } from './../../shared/shared.module';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AlunaCadastroComponent,
    AlunasComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AlunasModule { }
