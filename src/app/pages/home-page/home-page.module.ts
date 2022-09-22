import { HomePageComponent } from './home-page.component';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class HomePageModule { }
