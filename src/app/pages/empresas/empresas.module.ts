import { EmpresasComponent } from './empresas.component';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';



@NgModule({
  declarations: [
    EmpresaCadastroComponent,
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class EmpresasModule { }
