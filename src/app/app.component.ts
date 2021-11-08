import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faStar} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  faSearch = faSearch;
  faBell = faBell;
  faStar = faStar;
}
