import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-historico',
  templateUrl: './cursos-historico.component.html',
  styleUrls: ['./cursos-historico.component.scss']
})
export class CursosHistoricoComponent  {

  constructor(
    private router: Router
  ) { }

  goTo(rota: string){
    this.router.navigate([`/${rota}`]);
  }

}
