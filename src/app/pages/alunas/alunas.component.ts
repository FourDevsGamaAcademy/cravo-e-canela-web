import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlunaCadastroComponent } from './aluna-cadastro/aluna-cadastro.component';
import { IAluna } from './../../model/aluna.model';
import { Component, OnInit } from '@angular/core';
import { AlunaEditarComponent } from './aluna-editar/aluna-editar.component';

const ELEMENT_DATA: IAluna[] = [
  {position: 1, nome: 'Ana', sobrenome: 'Costa', cpf: '100.000.000-79', data_nasc: '01/01/2001', genero: 'Feminino', celular: '11 900000000', telefone: '', endereco: 'Rua X', email: 'aluna@email.com'},
];

@Component({
  selector: 'app-alunas',
  templateUrl: './alunas.component.html',
  styleUrls: ['./alunas.component.scss'],

})
export class AlunasComponent {
row: any;

  constructor(public dialog: MatDialog) {}

  edit(row: any) {
    this.dialog.open(AlunaEditarComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'atualizado') {
        //this.getAllProdutos();
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlunaCadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  displayedColumns: string[] = ['position', 'nome', 'sobrenome', 'cpf', 'data_nasc', 'genero', 'celular', 'telefone', 'endereco', 'email', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


