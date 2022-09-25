import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlunasComponent } from './pages/alunas/alunas.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosHistoricoComponent } from './pages/cursos-historico/cursos-historico.component';
import { CursoListaComponent } from './pages/cursos-historico/curso-lista/curso-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlunasComponent,
    EmpresasComponent,
    CursosComponent,
    CursosHistoricoComponent,
    CursoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
