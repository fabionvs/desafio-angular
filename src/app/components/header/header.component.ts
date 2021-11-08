import { Component, OnInit } from '@angular/core';
import { faBell, faStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
