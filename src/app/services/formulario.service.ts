import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:4200/enviaFormulario';
  }

  enviarFormulario(request: any): Observable<any>{
    return  this.http.post(this.apiURL, request);
  }

  listaprueba(): Observable<any>{
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
