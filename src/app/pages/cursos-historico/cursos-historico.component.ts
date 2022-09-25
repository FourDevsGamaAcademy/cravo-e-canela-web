import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-historico',
  templateUrl: './cursos-historico.component.html',
  styleUrls: ['./cursos-historico.component.scss']
})
export class CursosHistoricoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cursos = [
    {'id':1, 'name':'Cloud', 'empresa':''}
  ]
}
