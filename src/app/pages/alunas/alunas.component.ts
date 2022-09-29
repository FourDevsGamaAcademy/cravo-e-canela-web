import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/service/notification.service';

import { AlunaService } from './../../service/aluna.service';
import { AlunaCadastroComponent } from './aluna-cadastro/aluna-cadastro.component';

@Component({
  selector: 'app-alunas',
  templateUrl: './alunas.component.html',
  styleUrls: ['./alunas.component.scss'],

})
export class AlunasComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  alunoId: number = -1;

  constructor(
    private dialog: MatDialog,
    private alunaService: AlunaService,
    private toastr: NotificationService

  ) {
    this.getAll();
  }

  openDialog() {
    this.dialog.open(AlunaCadastroComponent, {
    }).afterClosed().subscribe(val => {
      if (val === 'salvo') {
        this.getAll();
      }
    })
  }

  displayedColumns: string[] = ['alunoId', 'nome', 'sobrenome', 'cpf', 'dataNasc', 'genero', 'celular', 'telefone', 'endereco', 'email', 'actions'];
  dataSource!: MatTableDataSource<any>;

  getAll() {
    this.alunaService.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        },
        error: () => {
          this.toastr.showError(`Erro ao listar alunas.`, "Erro")
          console.log("Erro ao listar alunas.");
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
    this.dialog.open(AlunaCadastroComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        this.getAll();
      }
    })
  }

  delete(alunoId: number) {
    this.alunaService.delete(alunoId)
      .subscribe({
        next: (res) => {
          this.toastr.showSuccess(`Aluno ${alunoId} adicionada.`, "Sucesso!")
          console.log("Aluna deletada.");
          this.getAll();
        },
        error: () => {
          this.toastr.showError(`Erro ao deletar aluno ${alunoId}.`, "Erro")
          console.log("Erro ao deletar aluna.");
        }
      });
  }
}
