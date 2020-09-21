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

  public validated_captcha: boolean;

  // este es tu form principal aca tiene que ir el captacha sabe sabe sabe

  isLinear = false;
  firstFormGroup: FormGroup;
  request: any;
  listaEnvio: any[];
  recaptcha: any[];
  dni2: string;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  //valoresRadio = 0;

  disabled = false;

  constructor(private formBuilder: FormBuilder,
              private formularioService: FormularioService,
              

              ){
                this.validated_captcha = false;
                //this.GanaConYAPE = new GanaConYAPE(); // completar con cantidad de campos
              }



  ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({
        dnicolaborador: new FormControl(''),
        cusuario: new FormControl(''),
        fechaemision: new FormControl(''),
        dnicliente: new FormControl(''),
        nombres: new FormControl(''),
        apPaterno: new FormControl(''),
        apMaterno: new FormControl(''),
        eMail: new FormControl(''),
        celular: new FormControl(''),
        valoresRadio: new FormControl('')
        
       
    });
  }

  
    //  this.formularioService.registrarUsuario(this.model)
    //      .subscribe(() =>{console.log("registro Exitoso");})}

    validarColaborador():void{
          this.formularioService.validarColaborador(this.model)
              .subscribe(() =>{console.log("Correcto");})}
  //   this.formularioService.registrarUsuario(this.firstFormGroup.value);
  //   console.log(this.firstFormGroup.value);
  /*
    resolver(captchaResponse: any[]){
      this.recaptcha = captchaResponse;

     this.model.recaptchaResponse=captchaResponse;
     this.model.colaborador=this.firstFormGroup.value.dni
    }*/

    resolver(response){
      this.dni2 = response;
    }


    enviar():void{
       
       this.model.colaborador = this.firstFormGroup.value.dnicolaborador;
       this.model.tipoDocumento = 1;
       this.model.numeroDocumento = this.firstFormGroup.value.dnicolaborador;
       this.model.fechaEmision = this.firstFormGroup.value.fecemision;
       this.model.usuario = this.firstFormGroup.value.dnicolaborador;
       this.model.cliente = this.firstFormGroup.value.dnicolaborador;
       this.model.nombres = this.firstFormGroup.value.dnicolaborador;
       this.model.appaterno = this.firstFormGroup.value.dnicolaborador;
       this.model.apmaterno = this.firstFormGroup.value.dnicolaborador;
       this.model.telefono = this.firstFormGroup.value.dnicolaborador;
       this.model.correoElectronico = this.firstFormGroup.value.dnicolaborador;
       this.model.condicion = this.firstFormGroup.value.dnicolaborador;
       this.model.recaptchaResponse = this.firstFormGroup.value.dnicolaborador;
      //console.log(this.firstFormGroup.value);
      console.log(this.model.recaptchaResponse);
      console.log(this.model.colaborador);
      console.log(this.firstFormGroup.value.apMaterno);
      
      
      

  
     }
   
  
}
