import { EmpresaService } from './../../service/empresa.service';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent {

  constructor(
    private dialog: MatDialog,
    private empresaService: EmpresaService,

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
        },
        error: () => {
          alert("Erro ao listar empresas.");
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
          alert("Empresa deletado");
          this.getAll();
        },
        error: () => {
          alert("Erro ao deletar empresa");
        }
      });
  }

}
