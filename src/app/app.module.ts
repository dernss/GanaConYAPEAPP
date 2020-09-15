import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomularioComponent } from './pages/fomulario/fomulario.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    AppComponent,
    FomularioComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
