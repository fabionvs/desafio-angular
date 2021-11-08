import { Component, OnInit } from '@angular/core';
import { faBell, faStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faBell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
