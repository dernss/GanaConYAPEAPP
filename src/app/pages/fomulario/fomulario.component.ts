import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormularioService } from '../../services/formulario.service';
import { GanaConYAPE } from '../../Model/formulario';


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


  dni: string;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({

    });
  }

  enviar(){
    console.log(this.firstFormGroup.value);
  }


}
