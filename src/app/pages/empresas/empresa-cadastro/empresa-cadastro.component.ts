import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.scss'],

})
export class EmpresaCadastroComponent implements OnInit {

  cursoForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.cursoForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
    })
  }


}
