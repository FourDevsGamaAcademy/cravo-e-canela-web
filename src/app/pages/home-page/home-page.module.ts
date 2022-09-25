import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class HomePageModule { }
