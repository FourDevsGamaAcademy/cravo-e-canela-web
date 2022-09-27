import { IEmpresa } from './../../model/empresa.model';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';

const ELEMENT_DATA: IEmpresa[] = [
  {empresa_id: 1, nome: 'Gama Academy', cnpj: 1.0079, endereco: 'H', responsavel: 'H', telefone: 'H', email: 'gama@gama.com'},
  {empresa_id: 2, nome: 'Santander', cnpj: 4.0026, endereco: 'He', responsavel: 'H', telefone: 'H', email: 'santander@santander.com' },
  {empresa_id: 3, nome: 'Safra', cnpj: 6.941, endereco: 'Li', responsavel: 'H', telefone: 'H', email: 'safra@safra.com' },
  {empresa_id: 4, nome: 'DIO', cnpj: 9.0122, endereco: 'Be', responsavel: 'H', telefone: 'H', email: 'dio@dio.com' },
  {empresa_id: 5, nome: 'Coursera', cnpj: 10.811, endereco: 'B', responsavel: 'H', telefone: 'H', email: 'coursera@coursera.com' }
];

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent  {
row: any;

  constructor(public dialog: MatDialog) {}

  edit(row: any) {
    this.dialog.open(EmpresaEditarComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        //this.getAllProdutos();
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(EmpresaCadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  displayedColumns: string[] = ['empresa_id', 'nome', 'cnpj', 'endereco', 'responsavel', 'telefone', 'email', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
