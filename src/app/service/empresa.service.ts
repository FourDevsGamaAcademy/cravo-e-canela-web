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

  getAll(){
    return this.httpClient.get<IEmpresa[]>(`${environment.api_url}/empresas`);
  }

  save(empresaObj: IEmpresa){
    return this.httpClient.post<IEmpresa>(`${environment.api_url}/empresas`, empresaObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/empresas/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<IEmpresa>(`${environment.api_url}/empresas/${id}`);
  }

  update(id: number, empresaObj: IEmpresa){
    return this.httpClient.patch<IEmpresa>(`${environment.api_url}/empresas/${id}`, empresaObj);
  }
}
