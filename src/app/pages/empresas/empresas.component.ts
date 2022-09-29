import { EmpresaService } from './../../service/empresa.service';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private empresaService: EmpresaService,
    private toastr : NotificationService
  ) {
    this.getAll();
  }

  openDialog() {
    this.dialog.open(EmpresaCadastroComponent, {
    }).afterClosed().subscribe(val => {
      if (val === 'salvo') {
        this.getAll();
      }
    })
  }


  displayedColumns: string[] = ['empresaId', 'nome', 'cnpj', 'endereco', 'responsavel', 'telefone', 'email', 'actions'];

  dataSource!: MatTableDataSource<any>;

  getAll() {
    this.empresaService.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
        },
        error: () => {
          this.toastr.showError("Erro ao listar empresas.", "Erro")
          console.log("Erro ao listar empresas.");
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
    this.dialog.open(EmpresaCadastroComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        this.getAll();
      }
    })
  }

  delete(empresaId: number) {
    this.empresaService.delete(empresaId)
      .subscribe({
        next: (res) => {
        this.toastr.showSuccess(`Empresa ${empresaId} deletada.`, "Exclusão")
          console.log("Empresa deletado.");
          this.getAll();
        },
        error: () => {
          this.toastr.showError("Erro ao listar empresas.", "Erro")
          console.log("Erro ao deletar empresa.");
        }
      });
  }

}
