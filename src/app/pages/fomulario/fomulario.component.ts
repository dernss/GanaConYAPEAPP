import {Component, OnInit, SimpleChange} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer } from '@angular/forms';
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


  isLinear = false;
  principal = new FormGroup({
    colaborador:  new FormGroup({

        numeroDocumento: new FormControl(''),
        usuario: new FormControl(''),
        fechaEmision: new FormControl('')
    }),
    cliente:  new FormGroup({

      numeroDocumento: new FormControl(''),
      nombres: new FormControl(''),
      apellidoPaterno: new FormControl(''),
      apellidoMaterno: new FormControl(''),
      correoElectronico: new FormControl(''),
      telefono: new FormControl(''),
      condicion: new FormControl('')
  })
    
});

  colaborador: FormGroup;
  cliente: FormGroup;
  jsonService: any;
  request: any;
  listaEnvio: any[];
  recaptcha: any[];
  captcha: string;

  captchavalido = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';

  fecha = new Date();



  constructor(private formBuilder: FormBuilder,
              private formularioService: FormularioService,
              ){
                this.validated_captcha = false;
               
              }



  ngOnInit() {
   
  
     this.colaborador = this.formBuilder.group({
        numeroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        usuario: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
        fechaEmision: new FormControl('', [Validators.required, Validators.nullValidator])
    });
    this.cliente = this.formBuilder.group({
      numeroDocumento: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
      nombres: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]),
      apellidoPaterno: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]),
      apellidoMaterno: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]),
      correoElectronico: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
      condicion: new FormControl('', Validators.required)
    
  });


  
    this.captchavalido = false;

    


  }

   /*
    if (this.firstFormGroup.valid && this.captcha != null)
      this.captchavalido = true;
    */


 

  get dniNoValido(){
    return this.colaborador.get('numeroDocumento').invalid && this.colaborador.get('numeroDocumento').touched
  }
  get usuarioNoValido(){
    return this.colaborador.get('usuario').invalid && this.colaborador.get('usuario').touched
  }
  get fechaNoValido(){
    return this.colaborador.get('fechaEmision').invalid && this.colaborador.get('fechaEmision').touched
  }
  get dniclienteNoValido(){
    return this.cliente.get('numeroDocumento').invalid && this.cliente.get('numeroDocumento').touched
  }
  get nombresNoValido(){
    return this.cliente.get('nombres').invalid && this.cliente.get('nombres').touched
  }
  get apPaternoNoValido(){
    return this.cliente.get('apellidoPaterno').invalid && this.cliente.get('apellidoPaterno').touched
  }
  get apMaternoNoValido(){
    return this.cliente.get('apellidoMaterno').invalid && this.cliente.get('apellidoMaterno').touched
  }
  get eMailNoValido(){
    return this.cliente.get('correoElectronico').invalid && this.cliente.get('correoElectronico').touched
  }
  get celularNoValido(){
    return this.cliente.get('telefono').invalid && this.cliente.get('telefono').touched
  } 
  get valoresRadioNoValido(){
    return this.cliente.get('condicion').invalid && this.cliente.get('condicion').pristine
  } 


    validarColaborador():void{
          this.formularioService.validarColaborador(this.model)
              .subscribe(() =>{console.log("Correcto");})}
  

    resolver(response){

      this.captcha = response;
      

      if (this.colaborador.value.numeroDocumento != '' && 
          this.colaborador.value.fechaEmision != '' &&
          this.colaborador.value.usuario != '' &&
          this.cliente.value.numeroDocumento != '' &&
          this.cliente.value.nombres != '' &&
          this.cliente.value.apellidoPaterno != '' &&
          this.cliente.value.apellidoMaterno != '' &&
          this.cliente.value.telefono != '' &&
          this.cliente.value.correoElectronico != '' &&
          this.cliente.value.telefono != '' &&
          this.cliente.value.condicion != ''){
        this.captchavalido = true;
      }
    }


onSubmit(): void{

  this.jsonService = {};
  this.jsonService.colaborador = this.colaborador.value;
  this.jsonService.colaborador.tipoDocumento = 1 ;
  this.jsonService.cliente = this.cliente.value;
  this.jsonService.cliente.tipoDocumento = 1 ;

  this.colaborador.reset({
    numerodocumento: "",
    usuario: "",
    fechaEmision: "",

  });


     console.log(this.jsonService);


    this.formularioService.registrarUsuario(this.jsonService)
    .subscribe(() =>{console.log("Registro Correcto");})

  
  
}

    enviar():void{
       
         
       this.formularioService.registrarUsuario(this.model)
              .subscribe(() =>{console.log("Registro Correcto");})
      this.colaborador.setValue({
        numerodocumento: "",
        usuario: "",
        fechaEmision: "",
        dnicliente: "",
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        correoElectronico: "",
        telefono: "",
        condicion: ""
      });

      if(!this.colaborador.valid){
        this.captchavalido=false;
        grecaptcha.reset();     
      }

     }

}
