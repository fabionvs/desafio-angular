import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AdmissaoComponent} from "./views/admissao/admissao.component";

@NgModule({
  declarations: [
    AppComponent,
    AdmissaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
