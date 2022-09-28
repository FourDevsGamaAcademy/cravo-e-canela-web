import { NgxMaskModule } from 'ngx-mask';
import { AlunaService } from './../../service/aluna.service';
import { AlunasComponent } from './alunas.component';
import { AlunaCadastroComponent } from './aluna-cadastro/aluna-cadastro.component';
import { SharedModule } from './../../shared/shared.module';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunaCadastroComponent,
    AlunasComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  providers: [
    AlunaService
  ]
})
export class AlunasModule { }
