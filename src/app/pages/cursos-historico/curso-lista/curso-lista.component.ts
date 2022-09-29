import { CursoService } from './../../../service/curso.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { CursoCadastroComponent } from '../curso-cadastro/curso-cadastro.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService,

  ) {
    this.getAll();
  }

  openDialog() {
    this.dialog.open(CursoCadastroComponent, {
    }).afterClosed().subscribe(val => {
      if (val === 'salvo') {
        this.getAll();
      }
    })
  }


  displayedColumns: string[] = ['cursoId', 'empresa', 'nome', 'descricao','cargaHoraria', 'dataCriacao', 'dataInicio', 'dataFim', 'inicioInscricao', 'fimInscricao', 'statusCurso', 'actions'];
  dataSource!: MatTableDataSource<any>;

  getAll() {
    this.cursoService.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        },
        error: () => {
          alert("Erro ao listar cursos.");
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(row: any) {
    this.dialog.open(CursoCadastroComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        this.getAll();
      }
    })
  }

  delete(cursoId: number) {
    this.cursoService.delete(cursoId)
      .subscribe({
        next: (res) => {
          alert("Curso deletado.");
          this.getAll();
        },
        error: () => {
          alert("Erro ao deletar curso.");
        }
      });
  }

}
