import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmpresa } from '../model/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(
    private httpClient: HttpClient
    ) { }

  // getAll(){
  //   return this.httpClient.get<IEmpresa[]>(`${environment.api_url}/empresa`);
  // }

  // save(empresaObj: IEmpresa){
  //   return this.httpClient.post<IEmpresa>(`${environment.api_url}/empresa`, empresaObj);
  // }

  // delete(id : number){
  //   return this.httpClient.delete(`${environment.api_url}/empresa/${id}`);
  // }

  // getOne(id : number){
  //   return this.httpClient.get<IEmpresa>(`${environment.api_url}/empresa/${id}`);
  // }

  // update(id: number, empresaObj: IEmpresa){
  //   return this.httpClient.patch<IEmpresa>(`${environment.api_url}/empresa/${id}`, empresaObj);
  // }

  save(data: any){
    return this.httpClient.post<any>(`http://localhost:8080/empresa/`, data);
  }

  getAll(){
    return this.httpClient.get<any>(`http://localhost:8080/empresa/`);
  }

  update(data: any, empresa_id: number){
    return this.httpClient.put<any>(`http://localhost:8080/empresa/${empresa_id}`, data);
  }

  delete(empresa_id: number){
    return this.httpClient.delete<any>(`http://localhost:8080/empresa/${empresa_id}`);
  }
}
