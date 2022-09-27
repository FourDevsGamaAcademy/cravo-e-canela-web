import { AlunaService } from './../../service/aluna.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlunaCadastroComponent } from './aluna-cadastro/aluna-cadastro.component';
import { IAluna } from './../../model/aluna.model';
import { Component, OnInit } from '@angular/core';
import { AlunaEditarComponent } from './aluna-editar/aluna-editar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const ELEMENT_DATA: IAluna[] = [
  {aluno_id: 1, nome: 'Ana', sobrenome: 'Costa', cpf: '100.000.000-79', data_nasc: '01/01/2001', genero: 'Feminino', celular: '11 900000000', telefone: '', endereco: 'Rua X', email: 'aluna@email.com'},
];

@Component({
  selector: 'app-alunas',
  templateUrl: './alunas.component.html',
  styleUrls: ['./alunas.component.scss'],

})
export class AlunasComponent {

  row: any;
  alunaForm : FormGroup = new FormGroup({});

  constructor(
    private dialog: MatDialog,
    private alunaService: AlunaService,
    private formBuilder: FormBuilder,
    ) {}


  // ngOnInit(): void {
  //   this.alunaForm = this.formBuilder.group({
  //     nome : [ null, [ Validators.required ] ],
  //     rua : [ null, [ Validators.required ] ],
  //     numero : [ null, [ Validators.required ] ],
  //     cep : [ null, [ Validators.required ] ]
  //   });
  //   // pegar parâmetros das rotas

  //   this.activatedRoute.params
  //     .subscribe(
  //       (parametros: any) => {
  //         console.log(parametros);

  //         // é EDIÇÃO
  //         if (parametros.id){
  //           console.log(`edição id ${parametros.id}`);

  //           this.isEdicao = true;
  //           this.id = parametros.id;

  //           // PRECISO consultar a API para buscar todas as informações do ID a ser editado

  //           this.alunaServices.getOne(parametros.id)
  //             .subscribe(
  //               (dadosAlunas) => {
  //                 console.log(dadosAlunas);
  //                 // patchValue atualiza os campos do formulário de acordo com o nome dos controles
  //                 this.alunaForm.patchValue(dadosAlunas);
  //               }
  //             );
  //         }
  //         // é CRIAÇÃO
  //         else {
  //           console.log(`criação`);
  //           this.isEdicao = false;
  //         }
  //       }
  //     );
  //   }
  //   // 4-) integrar os controles do form no HTML

  // onSubmit(){
  //   //console.log(this.alunaForm.value);
  //   // edicao igual a false significa que é criação
  //   if (this.isEdicao == false){
  //     this.alunaServices.save(this.alunaForm.value)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         // o navigate é para redirecionar para uma outra rota de interesse
  //         this.router.navigate(['/alunas']);
  //       }
  //     );
  //   }
  //   //é alteração de algum registro
  //   else{
  //     this.alunaServices.update(this.id, this.alunaForm.value)
  //     .subscribe(
  //         (data) => {
  //           console.log(data);
  //           // o navigate é para redirecionar para uma outra rota de interesse
  //           this.router.navigate(['/alunas']);
  //         }
  //       );
  //   }

  // }

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


  displayedColumns: string[] = ['aluno_id', 'nome', 'sobrenome', 'cpf', 'data_nasc', 'genero', 'celular', 'telefone', 'endereco', 'email', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


