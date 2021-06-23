import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente3Component } from './componente3/componente3.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [ 
{
  path:'component1',
  component:MyComponentComponent
},
{
  path:'hola-mundo',
  component:NewComponentComponent
},
{
  path:'tarea3',
  component:Componente3Component
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
