import { Empresa } from './../../model/empresa.model';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Empresa[] = [
  {position: 1, nome: 'Gama Academy', cnpj: 1.0079, endereco: 'H', responsavel: 'H', telefone: 'H', email: 'gama@gama.com'},
  {position: 2, nome: 'Santander', cnpj: 4.0026, endereco: 'He', responsavel: 'H', telefone: 'H', email: 'santander@santander.com' },
  {position: 3, nome: 'Safra', cnpj: 6.941, endereco: 'Li', responsavel: 'H', telefone: 'H', email: 'safra@safra.com' },
  {position: 4, nome: 'DIO', cnpj: 9.0122, endereco: 'Be', responsavel: 'H', telefone: 'H', email: 'dio@dio.com' },
  {position: 5, nome: 'Coursera', cnpj: 10.811, endereco: 'B', responsavel: 'H', telefone: 'H', email: 'coursera@coursera.com' }
];

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(EmpresaCadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  displayedColumns: string[] = ['position', 'nome', 'cnpj', 'endereco', 'responsavel', 'telefone', 'email', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
