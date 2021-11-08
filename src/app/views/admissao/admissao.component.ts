import { Component, OnInit } from '@angular/core';
import { faBell, faStar} from '@fortawesome/free-regular-svg-icons';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidarCpf} from "../../validators/cpf.validator";
import {AssociadoService} from "../../services/associado.service";

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {
  faBell = faBell;
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
    this.associado = this.associadoService.getAssociado(this.cpfForm.value.cpf);
    return true;
  }

}
