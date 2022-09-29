import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { CursoService } from 'src/app/service/curso.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.scss']
})
export class CursoCadastroComponent implements OnInit {

  cursoForm !: FormGroup;
  actionBtn : string = "Salvar";


  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService,
    @Inject(MAT_DIALOG_DATA) public isEdit: any,
    private dialogRef: MatDialogRef<CursoCadastroComponent>,
  ) { }

  ngOnInit(){
    this.cursoForm = this.formBuilder.group({
      cursoId: [null, [ Validators.required ] ],
      empresa: [null, [ Validators.required ] ],
      nome: [ null, [ Validators.required ] ],
      descricao: [ null, [ Validators.required ] ],
      cargaHoraria: [ null, [ Validators.required ] ],
      dataCriacao: [ null, [ Validators.required ] ],
      dataInicio: [ null, [ Validators.required ] ],
      dataFim: [ null, [ Validators.required ] ],
      inicioInscricao: [ null, [ Validators.required ] ],
      fimInscricao: [ null, [ Validators.required ] ],
      statusCurso: [ null, [ Validators.required ] ],
    });

    if(this.isEdit){
      this.actionBtn = "Atualizar";
      this.cursoForm.controls['cursoId'].setValue(this.isEdit.cursoId);
      this.cursoForm.controls['empresa'].setValue(this.isEdit.empresa);
      this.cursoForm.controls['nome'].setValue(this.isEdit.sobrenome);
      this.cursoForm.controls['descricao'].setValue(this.isEdit.descricao);
      this.cursoForm.controls['cargaHoraria'].setValue(this.isEdit.cargaHoraria);
      this.cursoForm.controls['dataCriacao'].setValue(this.isEdit.dataCriacao);
      this.cursoForm.controls['dataInicio'].setValue(this.isEdit.dataInicio);
      this.cursoForm.controls['dataFim'].setValue(this.isEdit.dataFim);
      this.cursoForm.controls['inicioInscricao'].setValue(this.isEdit.inicioInscricao);
      this.cursoForm.controls['fimInscricao'].setValue(this.isEdit.fimInscricao);
      this.cursoForm.controls['statusCurso'].setValue(this.isEdit.statusCurso);
    }
  }

  salvar(){
    if(!this.isEdit){
      if(this.cursoForm.valid){
        this.cursoService.save(this.cursoForm.value)
        .subscribe({
          next:(res)=>{
            alert("Cadastro curso adicionado.")
            this.cursoForm.reset();
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
    this.cursoService.update(this.cursoForm.value, this.isEdit.cursoId)
    .subscribe({
      next:(res)=>{
        alert("Cadastro curso atualizado.");
        this.cursoForm.reset();
        this.dialogRef.close('atualizado');
      },
      error:()=>{
        alert("Erro ao atualizar");
      }
    })
  }


}
