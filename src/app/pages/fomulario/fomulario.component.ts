import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormularioService } from '../../services/formulario.service';
import { GanaConYAPE } from '../../Model/formulario';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  public model: GanaConYAPE = new GanaConYAPE();

  isLinear = false;
  firstFormGroup: FormGroup;
  request: any;
  listaEnvio: any[];



  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(private formBuilder: FormBuilder,
              private formularioService: FormularioService,
              ){}

  ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({
        dnicolaborador: new FormControl(''),
        dnicliente: new FormControl(''),
        nombres: new FormControl(''),
        apPaterno: new FormControl(''),
        apMaterno: new FormControl(''),
        eMail: new FormControl(''),
        celular: new FormControl('')
    });
  }

   enviar():void{
     this.formularioService.registrarUsuario(this.model)
         .subscribe(() =>{console.log("registro Exitoso");})}

    validarColaborador():void{
          this.formularioService.validarColaborador(this.model)
              .subscribe(() =>{console.log("Correcto");})}
  //   this.formularioService.registrarUsuario(this.firstFormGroup.value);
  //   console.log(this.firstFormGroup.value);

  
}
