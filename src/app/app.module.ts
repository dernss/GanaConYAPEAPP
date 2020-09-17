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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";






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
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
