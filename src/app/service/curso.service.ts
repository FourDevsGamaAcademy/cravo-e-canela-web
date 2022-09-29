import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from '../model/curso.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(
    private httpClient: HttpClient
    ) { }

    // save(data: any){
    //   return this.httpClient.post<any>(`http://localhost:8080/cursos/`, data);
    // }

    // getAll(){
    //   return this.httpClient.get<any>(`http://localhost:8080/cursos/`);
    // }

    // update(data: any, curso_id: number){
    //   return this.httpClient.put<any>(`http://localhost:8080/cursos/${curso_id}`, data);
    // }

    // delete(curso_id: number){
    //   return this.httpClient.delete<any>(`http://localhost:8080/cursos/${curso_id}`);
    // }


  getAll(){
    return this.httpClient.get<ICurso[]>(`${environment.api_url}/cursos/todos`);
  }

  save(cursoObj: ICurso){
    return this.httpClient.post<ICurso>(`${environment.api_url}/cursos`, cursoObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/cursos/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<ICurso>(`${environment.api_url}/cursos/${id}`);
  }

  update(id: number, cursoObj: ICurso){
    return this.httpClient.put<ICurso>(`${environment.api_url}/cursos/${id}`, cursoObj);
  }
}
