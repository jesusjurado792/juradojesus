import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
