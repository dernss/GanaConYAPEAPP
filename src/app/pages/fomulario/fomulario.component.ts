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
      apPaterno: new FormControl(''),
      apMaterno: new FormControl(''),
      eMail: new FormControl(''),
      celular: new FormControl(''),
      valoresRadio: new FormControl('')
  })
    
});

  colaborador: FormGroup;
  cliente: FormGroup;
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
      apPaterno: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]),
      apMaterno: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]),
      eMail: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      celular: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
      valoresRadio: new FormControl('', Validators.required)
    
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
    return this.cliente.get('apPaterno').invalid && this.cliente.get('apPaterno').touched
  }
  get apMaternoNoValido(){
    return this.cliente.get('apMaterno').invalid && this.cliente.get('apMaterno').touched
  }
  get eMailNoValido(){
    return this.cliente.get('eMail').invalid && this.cliente.get('eMail').touched
  }
  get celularNoValido(){
    return this.cliente.get('celular').invalid && this.cliente.get('celular').touched
  } 
  get valoresRadioNoValido(){
    return this.cliente.get('valoresRadio').invalid && this.cliente.get('valoresRadio').pristine
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
          this.cliente.value.apPaterno != '' &&
          this.cliente.value.apMaterno != '' &&
          this.cliente.value.celular != '' &&
          this.cliente.value.eMail != '' &&
          this.cliente.value.celular != '' &&
          this.cliente.value.valoresRadio != ''){
        this.captchavalido = true;
      }
    }
// muestrame de nbuevo


onSubmit(): void{

  console.log(this.cliente.value);
  console.log('modal-headere');
  console.log(this.colaborador.value);
  console.log('modal-headere');
  // this.formularioService.registrarUsuario2(this.model)
  // .subscribe(() =>{console.log("Registro Correcto");})
  
  //  this.model.colaborador.tipoDocumento = 1;
  //  this.model.colaborador.numeroDocumento = this.colaborador.value.numeroDocumento;
   
  //  this.model.colaborador.fechaEmision =  this.firstFormGroup.value.fecemision;
  //  this.model.colaborador.usuario = this.firstFormGroup.value.cusuario;

   //this.model.cliente.tipoDocumento = 1;
   //this.model.cliente.numeroDocumento = this.firstFormGroup.value.dnicliente;
  //  this.model.cliente.nombres = this.firstFormGroup.value.nombres;
  //  this.model.cliente.apellidoPaterno = this.firstFormGroup.value.apPaterno;
  //  this.model.apmaterno = this.firstFormGroup.value.apMaterno;
  //  this.model.telefono = this.firstFormGroup.value.celular;
  //  this.model.correoElectronico = this.firstFormGroup.value.eMail;
  //  this.model.condicion = this.firstFormGroup.value.valoresRadio;
  //  this.model.recaptchaResponse = this.captcha;
  //console.log(this.firstFormGroup.value,this.secondFormGroup.value);


  console.log(this.model);
  
  
  
}

    enviar():void{
       
      //  this.model.colaborador = this.firstFormGroup.value.dnicolaborador;
      //  this.model.tipoDocumento = 1;
      //  this.model.numeroDocumento = this.firstFormGroup.value.dnicolaborador;
      //  this.model.fechaEmision =  this.firstFormGroup.value.fecemision;
      //  this.model.usuario = this.firstFormGroup.value.cusuario;
      //  this.model.cliente = this.firstFormGroup.value.dnicliente;
      //  this.model.nombres = this.firstFormGroup.value.nombres;
      //  this.model.appaterno = this.firstFormGroup.value.apPaterno;
      //  this.model.apmaterno = this.firstFormGroup.value.apMaterno;
      //  this.model.telefono = this.firstFormGroup.value.celular;
      //  this.model.correoElectronico = this.firstFormGroup.value.eMail;
      //  this.model.condicion = this.firstFormGroup.value.valoresRadio;
      //  this.model.recaptchaResponse = this.captcha;
         
       this.formularioService.registrarUsuario(this.model)
              .subscribe(() =>{console.log("Registro Correcto");})
      // this.colaborador.setValue({
      //   numerodocumento: "",
      //   usuario: "",
      //   fechaEmision: "",
      //   dnicliente: "",
      //   nombres: "",
      //   apPaterno: "",
      //   apMaterno: "",
      //   eMail: "",
      //   celular: "",
      //   valoresRadio: ""
      // });

      if(!this.colaborador.valid){
        this.captchavalido=false;
        grecaptcha.reset();     
      }

     }

}
