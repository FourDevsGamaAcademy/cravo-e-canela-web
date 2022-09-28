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

    save(data: any){
      return this.httpClient.post<any>(`http://localhost:8080/aluno/`, data);
    }

    getAll(){
      return this.httpClient.get<any>(`http://localhost:8080/aluno/`);
    }

    update(data: any, aluno_id: number){
      return this.httpClient.put<any>(`http://localhost:8080/aluno/${aluno_id}`, data);
    }

    delete(aluno_id: number){
      return this.httpClient.delete<any>(`http://localhost:8080/aluno/${aluno_id}`);
    }
}
