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
    return this.httpClient.get<IAluna[]>(`${environment.api_url}/aluno`);
  }

  save(alunaObj: IAluna){
    return this.httpClient.post<IAluna>(`${environment.api_url}/aluno`, alunaObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/aluno/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<IAluna>(`${environment.api_url}/aluno/${id}`);
  }

  update(id: number, alunaObj: IAluna){
    return this.httpClient.patch<IAluna>(`${environment.api_url}/aluno/${id}`, alunaObj);
  }
}
