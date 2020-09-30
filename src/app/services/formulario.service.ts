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

  constructor(private http: HttpClient) {
  }
  // como hago backstich ? porque tu model es any ?
    // http://200.37.108.23/msusuario/yape/cliente
    registrarUsuario(model: any): Observable<any>{
      //return this.http.post('http://200.37.108.23/msusuario/yape/cliente', model)
      return this.http.post(`${environment.apiUrl}msusuario/yape/cliente`, model);
      // .pipe(
      //   map((resp:any) =>{
      //     model.codigoRespuesta = resp.codigoRespuesta;
      //     model.mensajeRespuesta  = resp.mensajeRespuesta;
      //   })
      // );
    }

    
    validarColaborador(model: GanaConYAPE): Observable<any>{
        return this.http.post('http://200.37.108.23/msusuario/yape/colaborador', model);
    }

    registrarUsuario2(model: GanaConYAPE): void{
      console.log(model);
    }
    

    formatDate(date: Date): string {

      
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const fecha = moment(date);
        
      return fecha.format('DD/MM/YYYY');
    }

}
