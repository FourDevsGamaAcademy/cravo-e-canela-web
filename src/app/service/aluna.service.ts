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

    // save(data: any){
    //   return this.httpClient.post<any>(`http://localhost:8080/alunos/`, data);
    // }

    // getAll(){
    //   return this.httpClient.get<any>(`http://localhost:8080/alunos/`);
    // }

    // update(data: any, aluno_id: number){
    //   return this.httpClient.put<any>(`http://localhost:8080/alunos/${aluno_id}`, data);
    // }

    // delete(aluno_id: number){
    //   return this.httpClient.delete<any>(`http://localhost:8080/alunos/${aluno_id}`);
    // }


  getAll(){
    return this.httpClient.get<IAluna[]>(`${environment.api_url}/alunos`);
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
