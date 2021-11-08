import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
