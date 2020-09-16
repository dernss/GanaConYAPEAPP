import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormularioService } from '../../services/formulario.service';


@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  request: any;
  listaEnvio: any[];

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(private formBuilder: FormBuilder,
              private apiService: FormularioService) {
                this.request = {};
                this.apiService.listaprueba()
                    .subscribe(resultado => {this.listaEnvio = resultado.data; });
              }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }
  
  enviar(){
    console.log(this.checked);
  }


}
