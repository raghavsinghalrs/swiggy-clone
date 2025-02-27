import { Component } from '@angular/core';
import { MindComponent } from '../mind/mind.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BestplacesComponent } from '../bestplaces/bestplaces.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MindComponent,RestaurantsComponent,BestplacesComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
