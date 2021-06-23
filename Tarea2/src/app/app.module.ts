import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { Componente3Component } from './componente3/componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NewComponentComponent,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
