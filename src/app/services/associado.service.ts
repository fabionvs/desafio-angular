import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {
  constructor() {
  }

  getAssociado(cpf : string) {
    let associados = [
      {'cpf' : '01505078170', 'nome' : 'Fabio Alves', 'situacao' : true, 'conta_aplicacao': '5554854-4', 'conta_corrente' : '77842-9'},
      {'cpf' : '01505078171','nome' : 'João Marcos', 'situacao' : true, 'conta_aplicacao': '55552232-4', 'conta_corrente' : '77845-8'},
      {'cpf' : '01505078172','nome' : 'Pedro Miguel', 'situacao' : false, 'conta_aplicacao': '5554932-4', 'conta_corrente' : '77846-8'},
    ];
    console.log(associados.filter(item => item.cpf === cpf))
    return associados.filter(item => item.cpf === cpf)
  }

}
