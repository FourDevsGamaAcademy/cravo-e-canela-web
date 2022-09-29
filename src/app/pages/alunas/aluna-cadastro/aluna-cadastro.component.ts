import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlunaService } from './../../../service/aluna.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluna-cadastro',
  templateUrl: './aluna-cadastro.component.html',
  styleUrls: ['./aluna-cadastro.component.scss']
})
export class AlunaCadastroComponent implements OnInit {

  alunaForm !: FormGroup;
  actionBtn : string = "Salvar";

  constructor(
    private formBuilder: FormBuilder,
    private alunaService: AlunaService,
    @Inject(MAT_DIALOG_DATA) public isEdit: any,
    private dialogRef: MatDialogRef<AlunaCadastroComponent>,
  ) { }

  ngOnInit(){
    this.alunaForm = this.formBuilder.group({
      alunoId: [null, [ Validators.required ] ],
      nome: [ null, [ Validators.required ] ],
      sobrenome: [ null, [ Validators.required ] ],
      cpf: [ null, [ Validators.required ] ],
      dataNasc: [ null, [ Validators.required ] ],
      genero: [ null, [ Validators.required ] ],
      celular: [ null, [ Validators.required ] ],
      telefone: [ null, [ Validators.required ] ],
      endereco: [ null, [ Validators.required ] ],
      email: [ null, [ Validators.required ] ],
    });

    if(this.isEdit){
      this.actionBtn = "Atualizar";
      this.alunaForm.controls['alunoId'].setValue(this.isEdit.alunoId);
      this.alunaForm.controls['nome'].setValue(this.isEdit.nome);
      this.alunaForm.controls['sobrenome'].setValue(this.isEdit.sobrenome);
      this.alunaForm.controls['cpf'].setValue(this.isEdit.cpf);
      this.alunaForm.controls['dataNasc'].setValue(this.isEdit.dataNasc);
      this.alunaForm.controls['genero'].setValue(this.isEdit.genero);
      this.alunaForm.controls['celular'].setValue(this.isEdit.celular);
      this.alunaForm.controls['telefone'].setValue(this.isEdit.telefone);
      this.alunaForm.controls['endereco'].setValue(this.isEdit.endereco);
      this.alunaForm.controls['email'].setValue(this.isEdit.email);
    }
  }

  salvar(){
    if(!this.isEdit){
      if(this.alunaForm.valid){
        this.alunaService.save(this.alunaForm.value)
        .subscribe({
          next:(res)=>{
            alert("Cadastro aluna adicionada.")
            this.alunaForm.reset();
            this.dialogRef.close('salvo');
          }, error:()=>{
            alert("Erro ao adicionar");
          }
        });
      }
    } else {
      this.atualizar();
    }
  }

  atualizar(){
    this.alunaService.update(this.alunaForm.value, this.isEdit.alunoId)
    .subscribe({
      next:(res)=>{
        alert("Cadastro aluna atualizado.");
        this.alunaForm.reset();
        this.dialogRef.close('atualizado');
      },
      error:()=>{
        alert("Erro ao atualizar");
      }
    })
  }

}
