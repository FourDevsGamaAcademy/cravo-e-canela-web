import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAluna } from '../model/aluna.model';

@Injectable({
  providedIn: 'root'
})
export class AlunaService {
  constructor(
    private httpClient: HttpClient
    ) { }

  getAll(){
    return this.httpClient.get<IAluna[]>(`${environment.api_url}/alunos/todos`);
  }

  save(alunoObj: IAluna){
    return this.httpClient.post<IAluna>(`${environment.api_url}/alunos`, alunoObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/alunos/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<IAluna>(`${environment.api_url}/alunos/${id}`);
  }

  update(id: number, alunoObj: IAluna){
    return this.httpClient.put<IAluna>(`${environment.api_url}/alunos/${id}`, alunoObj);
  }
}
