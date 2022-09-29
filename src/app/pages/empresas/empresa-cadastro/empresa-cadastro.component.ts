import { EmpresaService } from './../../../service/empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.scss'],

})
export class EmpresaCadastroComponent implements OnInit  {

  empresaForm !: FormGroup;
  actionBtn : string = "Salvar";

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    @Inject(MAT_DIALOG_DATA) public isEdit: any,
    private dialogRef: MatDialogRef<EmpresaCadastroComponent>,
    private toastr : NotificationService
  ) { }

  ngOnInit(){
    this.empresaForm = this.formBuilder.group({
      empresaId: [null, [ Validators.required ] ],
      nome: [ null, [ Validators.required ] ],
      cnpj: [ null, [ Validators.required ] ],
      endereco: [ null, [ Validators.required ] ],
      responsavel: [ null, [ Validators.required ] ],
      telefone: [ null, [ Validators.required ] ],
      email: [ null, [ Validators.required ] ],

    });

    if(this.isEdit){
      this.actionBtn = "Atualizar";
      this.empresaForm.controls['empresaId'].setValue(this.isEdit.empresaId);
      this.empresaForm.controls['nome'].setValue(this.isEdit.nome);
      this.empresaForm.controls['cnpj'].setValue(this.isEdit.cnpj);
      this.empresaForm.controls['endereco'].setValue(this.isEdit.endereco);
      this.empresaForm.controls['responsavel'].setValue(this.isEdit.responsavel);
      this.empresaForm.controls['telefone'].setValue(this.isEdit.telefone);
      this.empresaForm.controls['email'].setValue(this.isEdit.email);
    }

  }

  salvar(){
    if(!this.isEdit){
      if(this.empresaForm){
        this.empresaService.save(this.empresaForm.value)
        .subscribe({
          next:(res)=>{
            this.toastr.showSuccess(`Empresa ${this.isEdit.nome} adicionada.`, "Sucesso!")
            console.log("Empresa adicionada")
            this.empresaForm.reset();
            this.dialogRef.close('salvo');
          }, error:()=>{
            this.toastr.showError(`Erro ao adicionar ${this.isEdit.nome}.`, "Erro")
            console.log("Erro ao adicionar");
          }
        });
      }
    } else {
      this.atualizar();
    }
  }

  atualizar(){
    this.empresaService.update(this.isEdit.empresaId, this.empresaForm.value)
    .subscribe({
      next:(res)=>{
        this.toastr.showSuccess(`Empresa ${this.isEdit.nome} atualizada.`, "Sucesso!")
        console.log("Empresa atualizada");
        this.empresaForm.reset();
        this.dialogRef.close('atualizado');
      },
      error:()=>{
        this.toastr.showError(`Erro ao atualizar ${this.isEdit.nome}.`, "Erro")
        console.log("Erro ao atualizar");
      }
    })
  }
}
