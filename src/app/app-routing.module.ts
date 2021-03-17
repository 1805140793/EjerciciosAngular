import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio8Component } from './ejercicio8/ejercicio8.component';

const routes: Routes = [
  {path:'ejercicio1',component:Ejercicio1Component},
  {path:'ejercicio3',component:Ejercicio3Component},
  {path:'ejercicio6',component:Ejercicio6Component},
  {path:'ejercicio8',component:Ejercicio8Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
