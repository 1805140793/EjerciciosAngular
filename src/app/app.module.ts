import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnvabezadoComponent } from './envabezado/envabezado.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio8Component } from './ejercicio8/ejercicio8.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnvabezadoComponent,
    Ejercicio1Component,
    Ejercicio3Component,
    Ejercicio6Component,
    Ejercicio8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
