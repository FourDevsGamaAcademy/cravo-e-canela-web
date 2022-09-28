import { EmpresaService } from './../../service/empresa.service';
import { EmpresasComponent } from './empresas.component';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpresaCadastroComponent,
    EmpresasComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresasModule { }
