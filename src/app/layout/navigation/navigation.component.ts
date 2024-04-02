import { Component } from '@angular/core';
import {RouterLinkActive} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLinkActive,
    FontAwesomeModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
