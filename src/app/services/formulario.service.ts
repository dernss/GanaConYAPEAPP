import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GanaConYAPE } from '../Model/formulario';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) {
  }

    registrarUsuario(model: GanaConYAPE): Observable<any>{
      return this.http.post('http://200.37.108.23/msusuario/yape/cliente', model);
    }

    validarColaborador(model: GanaConYAPE): Observable<any>{
        return this.http.post('http://200.37.108.23/msusuario/yape/colaborador', model);
    }

    registrarUsuario2(model: GanaConYAPE): void{
      console.log(model);
    }

}
