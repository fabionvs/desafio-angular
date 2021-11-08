import { Component, OnInit } from '@angular/core';
import { faBell, faStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss']
})
export class AdmissaoComponent implements OnInit {
  faBell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
