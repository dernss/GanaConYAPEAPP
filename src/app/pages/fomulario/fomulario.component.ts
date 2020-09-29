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
    firstFormGroup:  new FormGroup({

        dnicolaborador: new FormControl(''),
        cusuario: new FormControl(''),
        fecemision: new FormControl('')
    }),
    secondFormGroup:  new FormGroup({

      dnicliente: new FormControl(''),
      nombres: new FormControl(''),
      apPaterno: new FormControl(''),
      apMaterno: new FormControl(''),
      eMail: new FormControl(''),
      celular: new FormControl(''),
      valoresRadio: new FormControl('')
  })
    
});

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
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
   
  
     this.firstFormGroup = this.formBuilder.group({
        dnicolaborador: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        cusuario: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
        fecemision: new FormControl('', [Validators.required, Validators.nullValidator])
    });
    this.secondFormGroup = this.formBuilder.group({
      dnicliente: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
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
    return this.firstFormGroup.get('dnicolaborador').invalid && this.firstFormGroup.get('dnicolaborador').touched
  }
  get usuarioNoValido(){
    return this.firstFormGroup.get('cusuario').invalid && this.firstFormGroup.get('cusuario').touched
  }
  get fechaNoValido(){
    return this.firstFormGroup.get('fecemision').invalid && this.firstFormGroup.get('fecemision').touched
  }
  get dniclienteNoValido(){
    return this.secondFormGroup.get('dnicliente').invalid && this.secondFormGroup.get('dnicliente').touched
  }
  get nombresNoValido(){
    return this.secondFormGroup.get('nombres').invalid && this.secondFormGroup.get('nombres').touched
  }
  get apPaternoNoValido(){
    return this.secondFormGroup.get('apPaterno').invalid && this.secondFormGroup.get('apPaterno').touched
  }
  get apMaternoNoValido(){
    return this.secondFormGroup.get('apMaterno').invalid && this.secondFormGroup.get('apMaterno').touched
  }
  get eMailNoValido(){
    return this.secondFormGroup.get('eMail').invalid && this.secondFormGroup.get('eMail').touched
  }
  get celularNoValido(){
    return this.secondFormGroup.get('celular').invalid && this.secondFormGroup.get('celular').touched
  } 
  get valoresRadioNoValido(){
    return this.secondFormGroup.get('valoresRadio').invalid && this.secondFormGroup.get('valoresRadio').pristine
  } 


    validarColaborador():void{
          this.formularioService.validarColaborador(this.model)
              .subscribe(() =>{console.log("Correcto");})}
  

    resolver(response){

      this.captcha = response;
      

      if (this.firstFormGroup.value.dnicolaborador != '' && 
          this.firstFormGroup.value.fecemision != '' &&
          this.firstFormGroup.value.cusuario != '' &&
          this.secondFormGroup.value.dnicliente != '' &&
          this.secondFormGroup.value.nombres != '' &&
          this.secondFormGroup.value.apPaterno != '' &&
          this.secondFormGroup.value.apMaterno != '' &&
          this.secondFormGroup.value.celular != '' &&
          this.secondFormGroup.value.eMail != '' &&
          this.secondFormGroup.value.celular != '' &&
          this.secondFormGroup.value.valoresRadio != ''){
        this.captchavalido = true;
      }
    }
// muestrame de nbuevo


onSubmit(): void{
  // this.formularioService.registrarUsuario2(this.model)
  // .subscribe(() =>{console.log("Registro Correcto");})
  
  //  this.model.colaborador.tipoDocumento = 1;
  //  this.model.colaborador.numeroDocumento = this.firstFormGroup.value.dnicolaborador;
   
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


  console.log(this.principal.get("firstFormGroup").value);
  console.log('modal-headere');
  console.log(this.firstFormGroup.value);
  
  
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
      this.firstFormGroup.setValue({
        dnicolaborador: "",
        cusuario: "",
        fecemision: "",
        dnicliente: "",
        nombres: "",
        apPaterno: "",
        apMaterno: "",
        eMail: "",
        celular: "",
        valoresRadio: ""
      });

      if(!this.firstFormGroup.valid){
        this.captchavalido=false;
        grecaptcha.reset();     
      }

     }

}
