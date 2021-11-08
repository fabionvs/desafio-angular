import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
