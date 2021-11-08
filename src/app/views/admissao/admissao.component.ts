import { Component, OnInit } from '@angular/core';
import { faBell, faStar, faUser, faCheckCircle, faCreditCard} from '@fortawesome/free-regular-svg-icons';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidarCpf} from "../../validators/cpf.validator";
import {AssociadoService} from "../../services/associado.service";
import {Associado} from "../../models/associado";

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {
  faBell = faBell;
  faUser = faUser;
  faCheckCircle = faCheckCircle
  faCreditCard = faCreditCard;
  cpfForm: any;
  cpfInvalido = false;
  associado: any;

  constructor(
    private fb: FormBuilder,
    private associadoService : AssociadoService
  ) { }
  ngOnInit(): void {
    this.cpfForm = this.fb.group({
      cpf: ['', [<any>Validators.required, ValidarCpf.ValidaCpf]],
    });
  }

  onSubmit(){
    if(!this.cpfForm.valid){
      return false;
    }
    this.associado = this.associadoService.getAssociado(this.cpfForm.value.cpf) as Associado;
    console.log(this.associado)
    return true;
  }

}
