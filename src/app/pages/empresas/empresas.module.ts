import { EmpresaService } from './../../service/empresa.service';
import { EmpresasComponent } from './empresas.component';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    EmpresaCadastroComponent,
    EmpresasComponent,
    EmpresaEditarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresasModule { }
