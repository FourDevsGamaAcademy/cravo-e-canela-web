import { CursoService } from './../../../service/curso.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ICurso } from 'src/app/model/curso.model';
import { CursoCadastroComponent } from '../curso-cadastro/curso-cadastro.component';
import { CursoEditarComponent } from '../curso-editar/curso-editar.component';


const ELEMENT_DATA: ICurso[] = [
  { curso_id: 1, nome: 'Cloud', descricao: 'Serviços da AWS', carga_horaria: 12, data_criacao: '01/09/2022', data_inicio: '01/10/2022', data_fim: '30/12/2022', inicio_inscricao: '02/09/2022', fim_inscricao: '15/09/2022', status: 'finalizado' },
  { curso_id: 1, nome: 'Front-End', descricao: 'Javascript e Typescript', carga_horaria: 12, data_criacao: '01/09/2022', data_inicio: '01/10/2022', data_fim: '30/12/2022', inicio_inscricao: '02/09/2022', fim_inscricao: '15/09/2022', status: 'inicializado' },
  { curso_id: 1, nome: 'Back-End', descricao: 'Java e Spring', carga_horaria: 12, data_criacao: '01/09/2022', data_inicio: '01/10/2022', data_fim: '30/12/2022', inicio_inscricao: '02/09/2022', fim_inscricao: '15/09/2022', status: 'em andamento' }
];

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent {

  row: any;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public cursoService: CursoService
  ) { }

  edit(row: any) {
    this.dialog.open(CursoEditarComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        //this.getAllProdutos();
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CursoCadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(){
    // this.cursoService.delete(curso_id)
    // .subscribe(
    //   ()=>{
    //     console.log(`deletou registro com id ${curso_id}`);
    //     //this.getAll();
    //   }
    // );
  }


  displayedColumns: string[] = ['curso_id','nome', 'descricao','carga_horaria', 'data_criacao', 'data_inicio', 'data_fim', 'inicio_inscricao', 'fim_inscricao', 'status', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
