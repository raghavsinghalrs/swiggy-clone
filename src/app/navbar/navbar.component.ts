import { Component } from '@angular/core';
import { MindComponent } from '../mind/mind.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MindComponent,RestaurantsComponent,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
