import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { CursosHistoricoModule } from './pages/cursos-historico/cursos-historico.module';
import { AlunasModule } from './pages/alunas/alunas.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresasModule } from './pages/empresas/empresas.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    EmpresasModule,
    AlunasModule,
    CursosHistoricoModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
