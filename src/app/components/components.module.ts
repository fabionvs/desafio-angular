import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
