import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GanaConYAPE } from '../Model/formulario';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


moment.locale('es');

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.endpoint;
  }

    // http://200.37.108.23/msusuario/yape/cliente
    registrarUsuario(model: any): Observable<any>{
      //return this.http.post('http://200.37.108.23/msusuario/yape/cliente', model)
      return this.http.post(`${this.apiUrl}msusuario/yape/cliente`, model);
  
    }

    
    validarColaborador(model: GanaConYAPE): Observable<any>{
        return this.http.post('http://200.37.108.23/msusuario/yape/colaborador', model); // desarrollo
          //return this.http.post('http://192.168.116.11/msusuario/yape/colaborador', model); // producción
    }

    registrarUsuario2(model: GanaConYAPE): void{
      console.log(model);
    }
    

    formatDate(): string {

      const date: Date = new Date();
      // const day = date.getDate();
      // const month = date.getMonth() + 1;
      // const year = date.getFullYear();
      const fecha = moment(date);
        
      return fecha.format('DD/MM/YYYY');
    }

}
